import { ArrowRight, Sparkles } from 'lucide-react';
import ImageMiriClinic from '../images/MiriClinic.jpeg'

interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  image_url: string;
}

interface Package {
  id: string;
  name: string;
  description: string;
  duration: string;
  image_url: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
}

const featuredTreatments: Treatment[] = [

  {
    id: '1',
    name: 'Massage Suédois',
    description: 'Un massage classique de relaxation utilisant de longs mouvements fluides pour soulager les tensions et favoriser une détente profonde.',
    duration: '60 minutes',
    image_url: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Soin du visage à l\'aromathérapie',
    description: 'Soin du visage luxueux utilisant des huiles essentielles pour rajeunir et nourrir votre peau.',
    duration: '75 minutes',
    image_url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Thérapie aux pierres chaudes',
    description: 'Des pierres basaltiques chauffées placées sur des points clés pour dissoudre le stress et favoriser la circulation.',
    duration: '90 minutes',
    image_url: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800',
  },
];

const popularPackages: Package[] = [
  {
    id: '1',
    name: 'Serenity Escape',
    description: 'A half-day retreat including massage, facial, and body wrap for complete rejuvenation.',
    duration: '4 hours',
    image_url: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Couples Retreat',
    description: 'Share a relaxing experience with your partner including side-by-side massages and champagne.',
    duration: '3 hours',
    image_url: 'https://images.pexels.com/photos/6663364/pexels-photo-6663364.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Ultimate Wellness',
    description: 'Full-day spa experience with multiple treatments, healthy lunch, and access to all facilities.',
    duration: '8 hours',
    image_url: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const services: Service[] = [{
  id: '1',
  name: 'Massage Thérapeutique',
  description: 'Du massage suédois au massage en profondeur, nos thérapeutes experts adaptent chaque séance à vos besoins.',
  image_url: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800',
  slug: 'massage-therapy',
},

{
  id: '2',
  name: 'Soins du Visage',
  description: 'Soins de peau avancés pour nettoyer, exfolier et revitaliser votre teint.',
  image_url: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
  slug: 'facial-treatments',
},
{
  id: '3',
  name: 'Soins du Corps',
  description: 'Enveloppements luxueux, gommages et hydrothérapie pour détoxifier et nourrir votre corps.',
  image_url: 'https://i.pinimg.com/736x/05/20/34/052034d4e91e0215a30b4b900792cb56.jpg?auto=compress&cs=tinysrgb&w=800',
  slug: 'body-treatments',
},
];

interface HomePageProps {
  onNavigate: (page: string) => void;
  onNavigateService?: (slug: string) => void;
}

export default function HomePage({ onNavigate, onNavigateService }: HomePageProps) {

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
          <h1 className="text-5xl md:text-7xl font-serif mb-6"> Redéfinir la détente</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Plongez dans un sanctuaire de tranquillité où chaque détail est pensé pour votre bien-être
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Réserver un rendez-vous
          </button>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Notre Philosophie du Bien-être</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chez Serenity Spa, nous croyons que le véritable bien-être naît de l'harmonie parfaite entre l'esprit, le corps et l'âme. Notre approche holistique combine les traditions anciennes de guérison avec des techniques thérapeutiques modernes.
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
              Voir tous les soins
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-amber-900 mb-6">Notre Philosophie du Bien-être</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chez Serenity Spa, nous croyons que le véritable bien-être naît de l'harmonie parfaite entre l'esprit, le corps et l'âme. Notre approche holistique combine les traditions anciennes de guérison avec des techniques thérapeutiques modernes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque soin est conçu avec soin non seulement pour détendre votre corps, mais aussi pour revitaliser votre être tout entier,
                vous laissant rafraîchi et renouvelé.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition-colors"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${ImageMiriClinic})`,
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre large gamme de soins professionnels de spa et de bien-être
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
                    Voir les détails  <ArrowRight className="w-5 h-5" />
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
