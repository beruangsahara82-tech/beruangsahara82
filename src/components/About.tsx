import React from 'react';
import { Leaf, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Langsung dari Kebun',
      description: 'Buah-buahan dipetik langsung dari kebun lokal untuk menjamin kesegaran maksimal'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Kemitraan Petani',
      description: 'Bermitra dengan petani lokal untuk mendukung ekonomi masyarakat sekitar'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Kualitas Terjamin',
      description: 'Setiap buah melalui proses seleksi ketat untuk memastikan kualitas terbaik'
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: 'Sehat & Bergizi',
      description: 'Menyediakan buah-buahan bergizi tinggi untuk kesehatan keluarga Indonesia'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">Buakhuldi Fruits</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Buakhuldi Fruits adalah toko buah segar yang berkomitmen menyediakan buah-buahan 
                  berkualitas tinggi langsung dari kebun lokal. Kami percaya bahwa buah segar adalah 
                  kunci untuk hidup sehat dan bahagia.
                </p>
                <p>
                  Sejak didirikan, kami telah menjalin kemitraan yang kuat dengan para petani lokal 
                  untuk memastikan setiap buah yang kami jual memiliki kualitas terbaik dan kesegaran 
                  yang terjaga.
                </p>
                <p>
                  Visi kami adalah menjadi penyedia buah segar terpercaya yang mendukung gaya hidup 
                  sehat masyarakat Indonesia sambil memberdayakan petani lokal.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-gray-600">Jenis Buah</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh Fruit Market"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Mengapa Memilih <span className="text-green-600">Buakhuldi Fruits?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;