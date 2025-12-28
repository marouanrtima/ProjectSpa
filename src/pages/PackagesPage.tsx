import { useEffect, useState } from 'react';
import { Gift, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Package = Database['public']['Tables']['packages']['Row'];

interface PackagesPageProps {
  onNavigate: (page: string) => void;
}

export default function PackagesPage({ onNavigate }: PackagesPageProps) {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    async function fetchPackages() {
      const { data } = await supabase
        .from('packages')
        .select('*')
        .order('created_at');

      if (data) setPackages(data);
    }

    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3865607/pexels-photo-3865607.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Wellness Packages</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive experiences combining multiple treatments for ultimate rejuvenation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-stone-200"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image_url})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-amber-900 mb-3">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-amber-900 mb-2">Includes:</h4>
                    <div className="space-y-2">
                      {pkg.included_treatments.split(',').map((treatment, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{treatment.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                    <span className="text-amber-700 font-medium">{pkg.duration}</span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors text-sm font-medium"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/6621392/pexels-photo-6621392.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div>
                <Gift className="w-12 h-12 text-amber-800 mb-6" />
                <h2 className="text-4xl font-serif text-amber-900 mb-4">Give the Gift of Relaxation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Share the experience of tranquility with someone special. Our gift cards are the perfect way to show
                  you care, offering your loved ones an escape into pure relaxation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Available for any amount or specific treatment package, our gift cards never expire and can be used
                  for any of our services.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium"
                >
                  Purchase Gift Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
