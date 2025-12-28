import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Service = Database['public']['Tables']['services']['Row'];
type ServiceItem = Database['public']['Tables']['service_items']['Row'];

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const [service, setService] = useState<Service | null>(null);
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      const { data: serviceData } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (serviceData) {
        setService(serviceData);

        const { data: itemsData } = await supabase
          .from('service_items')
          .select('*')
          .eq('service_id', serviceData.id)
          .order('created_at');

        if (itemsData) setServiceItems(itemsData);
      }

      setLoading(false);
    }

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${service.image_url})`,
        }}
      >
        <div className="container mx-auto px-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-serif text-white">{service.name}</h1>
          <p className="text-xl text-gray-200 mt-4 max-w-2xl">{service.description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Our {service.name} Services</h2>
            <p className="text-gray-600">Professional treatments with expert therapists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-serif text-amber-900 mb-3">{item.name}</h3>
                {item.description && <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>}

                <div className="space-y-3">
                  {item.duration && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-amber-700" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                  {item.price && (
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-lg">
                      <DollarSign className="w-5 h-5" />
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full mt-6 bg-amber-800 text-white px-4 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-4">Ready to Book?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your appointment or learn more about our {service.name} services
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
