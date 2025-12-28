import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Treatment = Database['public']['Tables']['treatments']['Row'];
type Package = Database['public']['Tables']['packages']['Row'];
type Service = Database['public']['Tables']['services']['Row'];

interface HomePageProps {
  onNavigate: (page: string) => void;
  onNavigateService?: (slug: string) => void;
}

export default function HomePage({ onNavigate, onNavigateService }: HomePageProps) {
  const [featuredTreatments, setFeaturedTreatments] = useState<Treatment[]>([]);
  const [popularPackages, setPopularPackages] = useState<Package[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: treatments } = await supabase
        .from('treatments')
        .select('*')
        .eq('is_featured', true)
        .limit(3);

      const { data: packages } = await supabase
        .from('packages')
        .select('*')
        .eq('is_popular', true)
        .limit(3);

      const { data: servicesData } = await supabase
        .from('services')
        .select('*')
        .order('created_at');

      if (treatments) setFeaturedTreatments(treatments);
      if (packages) setPopularPackages(packages);
      if (servicesData) setServices(servicesData);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Redefining Relaxation</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in a sanctuary of tranquility where every detail is crafted for your wellbeing
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Book an Appointment
          </button>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Featured Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved treatments, carefully designed to restore balance and harmony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${treatment.image_url})` }} />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-amber-900 mb-3">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-700 font-medium">{treatment.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('treatments')}
              className="inline-flex items-center gap-2 text-amber-800 font-medium hover:text-amber-900 transition-colors"
            >
              View All Treatments
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-amber-900 mb-6">Our Wellness Philosophy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Serenity Spa, we believe that true wellness emerges from the perfect harmony of mind, body, and spirit.
                Our holistic approach combines ancient healing traditions with modern therapeutic techniques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every treatment is thoughtfully designed to not only relax your body but to rejuvenate your entire being,
                leaving you refreshed and renewed.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition-colors"
              >
                Discover More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of professional spa and wellness treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigateService?.(service.slug)}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image_url})` }}
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-serif text-amber-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="inline-flex items-center gap-2 text-amber-800 font-medium group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Popular Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated wellness experiences that combine multiple treatments for ultimate relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {popularPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image_url})` }} />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-amber-900 mb-3">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>
                  <div className="flex items-center justify-between text-sm text-amber-700 font-medium">
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 text-amber-800 font-medium hover:text-amber-900 transition-colors"
            >
              View All Packages
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3997999/pexels-photo-3997999.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Begin Your Journey to Wellness
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let us guide you to a place of deep relaxation and rejuvenation
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
