import { Heart, Leaf, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Wellness',
      description: 'Every treatment is delivered with genuine care and dedication to your wellbeing',
    },
    {
      icon: Leaf,
      title: 'Natural Approach',
      description: 'We use only premium, organic products that honor both your body and nature',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our team of certified professionals brings years of expertise to every session',
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Each experience is tailored to your unique needs and preferences',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A sanctuary where ancient wisdom meets modern luxury
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded with a vision to create an oasis of tranquility in the heart of the city, Serenity Spa has been
              a beacon of wellness and rejuvenation for over a decade. Our journey began with a simple belief: that
              everyone deserves a sanctuary where they can escape the demands of modern life and reconnect with their
              inner peace.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From our humble beginnings, we have grown into a trusted destination for those seeking authentic
              wellness experiences. Every detail of our spa, from the soothing ambiance to our carefully curated
              treatments, reflects our commitment to creating an environment where healing and relaxation flourish
              naturally.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we continue to honor our founding principles while embracing innovative approaches to holistic
              wellness, ensuring that each visit offers a transformative experience that nurtures body, mind, and spirit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Our Philosophy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Qualified Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Our therapists are certified professionals with extensive training in various healing modalities.
                Each brings a unique expertise and genuine passion for helping you achieve optimal wellness.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Luxurious Atmosphere</h3>
              <p className="text-gray-700 leading-relaxed">
                Every corner of our spa is designed to transport you to a world of serenity. From the calming
                aromatherapy to the elegant treatment rooms, we create an environment that soothes all your senses.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-amber-900 mb-4">Personalized Treatments</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that each person's wellness journey is unique. That's why we take the time to understand
                your needs and customize every treatment to deliver the most beneficial results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
    </div>
  );
}
