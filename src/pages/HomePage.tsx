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
    name: 'Soin de visage',
    description: 'Un soin essentiel pour purifier la peau et éliminer toutes les impuretés. Ce soin est adapté à chaque type de peau (grasse, sèche, mixte, etc.)',
    duration: '60 minutes',
    image_url: 'https://i.pinimg.com/736x/6d/8a/d2/6d8ad269a71d1a2119263368bf362957.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Hammam & Sauna',
    description: 'Hammam traditionnel à Casa Venez vous ressourcer dans une ambiance relaxante et découvrir nos rituels spa ancestraux les Bains du ciel.',
    duration: '75 minutes',
    image_url: 'https://i.pinimg.com/736x/50/60/8a/50608a75675ab52ceb19392f97949937.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Massages',
    description: 'Le massage a nombreux bienfait. il soulage les tensions, le stress et le doleurs musculaires.',
    duration: '90 minutes',
    image_url: 'https://ciel-spa.ma/wp-content/uploads/2023/01/6144579687284736.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: `Soins`,
    description: `Les années d'expérience que nous mettons à votre disposition, avec la haute qualité des produits utilisés,`,
    duration: '90 minutes',
    image_url: 'https://ciel-spa.ma/wp-content/uploads/2023/01/pexels-polina-tankilevitch-3738348-1536x1024.jpg?auto=compress&cs=tinysrgb&w=800',
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
  name: 'Épilation définitive',
  description: 'Une méthode de plus en plus populaire, offrant une solution à long terme pour se débarrasser des poils. Le laser cible le follicule pileux pour empêcher la repousse des poils de manière permanente.',
  image_url: 'https://i.pinimg.com/736x/ee/f2/54/eef254038c8e40094b48ec8398bc71b2.jpg?auto=compress&cs=tinysrgb&w=800',
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
  name: 'HIFU',
  description: `Le HIFU est une technologie de pointe qui utilise des ultrasons focalisés pour stimuler la production de collagène et d'élastine dans la peau, ce qui entraîne un raffermissement visible de la peau et une réduction des signes de l'âge.`,
  image_url: 'https://i.pinimg.com/736x/6f/07/f7/6f07f7c16c88f632eeb970faaea7ce39.jpg?auto=compress&cs=tinysrgb&w=800',
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
          <h1 className="text-5xl md:text-7xl font-serif mb-6">MIRICLINIC SPA CENTRE</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Votre détente notre passion, notre spa est dédié à inspirer une vie équilibrée et un esprit sain.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-700 text-white px-8 py-4 rounded-md hover:bg-amber-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Réserver un rendez-vous
          </button>
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
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre large gamme de soins professionnels de spa et de bien-être.
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
