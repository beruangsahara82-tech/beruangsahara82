import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Pisang Ambon',
      price: 'Rp 15.000/kg',
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pisang ambon manis dan segar, kaya akan potasium dan vitamin B6.',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Apel Malang',
      price: 'Rp 25.000/kg',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Apel malang segar dengan rasa manis dan tekstur renyah.',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Jeruk Pontianak',
      price: 'Rp 20.000/kg',
      image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Jeruk pontianak dengan kandungan vitamin C tinggi dan rasa segar.',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Mangga Harum Manis',
      price: 'Rp 30.000/kg',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mangga harum manis dengan daging buah tebal dan aroma yang menggoda.',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Pepaya California',
      price: 'Rp 12.000/kg',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Pepaya california dengan daging buah orange dan rasa manis alami.',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Semangka Merah',
      price: 'Rp 8.000/kg',
      image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Semangka merah segar dengan kadar air tinggi, cocok untuk cuaca panas.',
      rating: 4.5
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk <span className="text-green-600">Unggulan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan buah-buahan segar terbaik dengan kualitas premium langsung dari kebun lokal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200 group">
                    <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;