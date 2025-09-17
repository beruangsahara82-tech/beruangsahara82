import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email',
      content: 'info@buakhuldifruits.com',
      link: 'mailto:info@buakhuldifruits.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'WhatsApp',
      content: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890?text=Halo%20Buakhuldi%20Fruits,%20saya%20ingin%20bertanya%20tentang%20produk%20buah%20segar'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: 'Alamat',
      content: 'Jl. Raya Buah Segar No. 123, Jakarta Selatan',
      link: 'https://maps.google.com/?q=Jl.+Raya+Buah+Segar+No.+123,+Jakarta+Selatan'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-green-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siap melayani Anda dengan buah-buahan segar terbaik. Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-900">Jam Operasional</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span className="font-medium">08:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Quick Contact */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.746890240235!2d106.79249731476295!3d-6.294694995438799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1635123456789!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Buakhuldi Fruits"
              ></iframe>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Kontak Cepat</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Buakhuldi%20Fruits,%20saya%20ingin%20bertanya%20tentang%20produk%20buah%20segar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+6281234567890"
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Telepon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;