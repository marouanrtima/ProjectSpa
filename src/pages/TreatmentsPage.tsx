import { useState } from 'react';
import { Mail } from 'lucide-react';

interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  image_url: string;
}

const treatments: Treatment[] = [
  {
    id: '1',
    name: 'Swedish Massage',
    description: 'A classic relaxation massage using long, flowing strokes to ease tension and promote deep relaxation.',
    duration: '60 minutes',
    category: 'massage',
    image_url: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Targets deeper layers of muscle tissue to release chronic tension and knots.',
    duration: '75 minutes',
    category: 'massage',
    image_url: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Hot Stone Therapy',
    description: 'Heated basalt stones placed on key points to melt away stress and promote circulation.',
    duration: '90 minutes',
    category: 'massage',
    image_url: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: 'Aromatherapy Facial',
    description: 'Luxurious facial treatment using essential oils to rejuvenate and nourish your skin.',
    duration: '75 minutes',
    category: 'facial',
    image_url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    name: 'Anti-Aging Facial',
    description: 'Advanced treatment targeting fine lines and wrinkles for a youthful, radiant complexion.',
    duration: '90 minutes',
    category: 'facial',
    image_url: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    name: 'Detox Body Wrap',
    description: 'Full body treatment to eliminate toxins and leave your skin soft and refreshed.',
    duration: '60 minutes',
    category: 'body',
    image_url: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7',
    name: 'Salt Scrub Exfoliation',
    description: 'Invigorating body scrub to remove dead skin cells and reveal smooth, glowing skin.',
    duration: '45 minutes',
    category: 'body',
    image_url: 'https://images.pexels.com/photos/6621182/pexels-photo-6621182.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '8',
    name: 'Reflexology',
    description: 'Pressure point therapy focusing on feet to promote healing throughout the body.',
    duration: '45 minutes',
    category: 'wellness',
    image_url: 'https://images.pexels.com/photos/5240651/pexels-photo-5240651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '9',
    name: 'Meditation Session',
    description: 'Guided meditation to calm the mind and restore inner peace.',
    duration: '30 minutes',
    category: 'wellness',
    image_url: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

interface TreatmentsPageProps {
  onNavigate: (page: string) => void;
}

export default function TreatmentsPage({ onNavigate }: TreatmentsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(treatments.map((t) => t.category)))];
  const filteredTreatments =
    selectedCategory === 'all' ? treatments : treatments.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Treatments</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover a world of therapeutic experiences designed to restore balance and vitality
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-800 text-white'
                    : 'bg-stone-100 text-gray-700 hover:bg-stone-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-stone-200"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${treatment.image_url})` }}
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                    {treatment.category}
                  </div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-3">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-700 font-medium">{treatment.duration}</span>
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

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-12 h-12 text-amber-800 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-amber-900 mb-4">Need Advice?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Not sure which treatment is right for you? Our wellness experts are here to help you choose the perfect
            experience for your needs.
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
