import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const { error } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Serenity Lane, Wellness District',
      subcontent: 'City Center, 10001',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subcontent: 'Available 9 AM - 8 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@serenityspa.com',
      subcontent: 'We reply within 24 hours',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Monday - Sunday',
      subcontent: '9:00 AM - 8:00 PM',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/6620882/pexels-photo-6620882.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and help you begin your wellness journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-full mb-4">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif text-amber-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subcontent}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif text-amber-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Have a question or want to book an appointment? Fill out the form and we'll get back to you as soon
                  as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                      Thank you for your message! We'll be in touch soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-serif text-amber-900 mb-6">Find Us</h2>
                <div className="bg-stone-100 rounded-lg overflow-hidden shadow-lg h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3896815839354!2d-73.98731668459417!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fea1b334d5%3A0x5321e0f2e8c3a7b3!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
