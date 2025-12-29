import { ArrowLeft, Clock, DollarSign } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
}

interface ServiceItem {
  id: string;
  service_id: string;
  name: string;
  description: string | null;
  duration: string | null;
  price: number | null;
}

const servicesData: Record<string, { service: Service; items: ServiceItem[] }> = {
  'massage-therapy': {
    service: {
      id: '1',
      name: 'Massage Thérapeutique',
      description: 'Du massage suédois au massage en profondeur, nos thérapeutes experts adaptent chaque séance à vos besoins.',
      image_url: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1920',
      slug: 'massage-therapy',
    },
    items: [
      { id: '1', service_id: '1', name: 'Swedish Massage', description: 'Classic relaxation massage with long, flowing strokes.', duration: '60 minutes', price: 95 },
      { id: '2', service_id: '1', name: 'Deep Tissue Massage', description: 'Targets deeper muscle layers to release chronic tension.', duration: '75 minutes', price: 120 },
      { id: '3', service_id: '1', name: 'Hot Stone Massage', description: 'Heated stones placed on key points for deep relaxation.', duration: '90 minutes', price: 140 },
      { id: '4', service_id: '1', name: 'Sports Massage', description: 'Designed for athletes to prevent and treat injuries.', duration: '60 minutes', price: 110 },
      { id: '5', service_id: '1', name: 'Prenatal Massage', description: 'Gentle massage designed for expecting mothers.', duration: '60 minutes', price: 100 },
    ],
  },
  'facial-treatments': {
    service: {
      id: '2',
      name: 'Facial Treatments',
      description: 'Advanced skincare treatments to cleanse, exfoliate, and revitalize your complexion.',
      image_url: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920',
      slug: 'facial-treatments',
    },
    items: [
      { id: '6', service_id: '2', name: 'Classic Facial', description: 'Deep cleansing facial for all skin types.', duration: '60 minutes', price: 85 },
      { id: '7', service_id: '2', name: 'Anti-Aging Facial', description: 'Targets fine lines and wrinkles for youthful skin.', duration: '75 minutes', price: 130 },
      { id: '8', service_id: '2', name: 'Hydrating Facial', description: 'Intense moisture treatment for dry skin.', duration: '60 minutes', price: 95 },
      { id: '9', service_id: '2', name: 'Acne Treatment Facial', description: 'Specialized treatment for acne-prone skin.', duration: '60 minutes', price: 100 },
      { id: '10', service_id: '2', name: 'Brightening Facial', description: 'Evens skin tone and adds radiance.', duration: '75 minutes', price: 115 },
    ],
  },
  'body-treatments': {
    service: {
      id: '3',
      name: 'Body Treatments',
      description: 'Luxurious wraps, scrubs, and hydrotherapy to detoxify and nourish your body.',
      image_url: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=1920',
      slug: 'body-treatments',
    },
    items: [
      { id: '11', service_id: '3', name: 'Detox Body Wrap', description: 'Full body treatment to eliminate toxins.', duration: '60 minutes', price: 110 },
      { id: '12', service_id: '3', name: 'Salt Scrub Exfoliation', description: 'Removes dead skin cells for smooth, glowing skin.', duration: '45 minutes', price: 75 },
      { id: '13', service_id: '3', name: 'Mud Body Mask', description: 'Mineral-rich mud treatment for skin rejuvenation.', duration: '60 minutes', price: 100 },
      { id: '14', service_id: '3', name: 'Aromatherapy Body Wrap', description: 'Essential oil infused wrap for relaxation.', duration: '75 minutes', price: 120 },
      { id: '15', service_id: '3', name: 'Cellulite Treatment', description: 'Targeted treatment to improve skin texture.', duration: '60 minutes', price: 130 },
    ],
  },
};

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const data = servicesData[slug];
  const service = data?.service || null;
  const serviceItems = data?.items || [];

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
