import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDownload } from 'react-icons/fa';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'linear-motion', name: 'Linear Motion' },
    { id: 'bearings', name: 'Bearings' },
    { id: 'pneumatics', name: 'Pneumatics' },
    { id: 'actuators', name: 'Actuators' },
    { id: 'conveyors', name: 'Conveyors' },
    { id: 'spm', name: 'Special Purpose Machines' },
  ];

  const products = [
    {
      id: 1,
      name: 'Linear Motion Bearings',
      category: 'linear-motion',
      description: 'High-precision linear bearings for smooth motion control',
      image: '/products/linear-bearings.jpg',
      datasheet: '/datasheets/linear-bearings.pdf',
    },
    {
      id: 2,
      name: 'Pillow Blocks',
      category: 'bearings',
      description: 'Robust bearing housings for various industrial applications',
      image: '/products/pillow-blocks.jpg',
      datasheet: '/datasheets/pillow-blocks.pdf',
    },
    {
      id: 3,
      name: 'Pneumatic Fittings',
      category: 'pneumatics',
      description: 'Reliable pneumatic connectors and fittings',
      image: '/products/pneumatic-fittings.jpg',
      datasheet: '/datasheets/pneumatic-fittings.pdf',
    },
    {
      id: 4,
      name: 'Ball Screws',
      category: 'linear-motion',
      description: 'Precision ball screws for accurate linear motion',
      image: '/products/ball-screws.jpg',
      datasheet: '/datasheets/ball-screws.pdf',
    },
    {
      id: 5,
      name: 'Electromechanical Actuators',
      category: 'actuators',
      description: 'Electric actuators for precise positioning',
      image: '/products/electromechanical-actuators.jpg',
      datasheet: '/datasheets/electromechanical-actuators.pdf',
    },
    {
      id: 6,
      name: 'Conveyor Systems',
      category: 'conveyors',
      description: 'Customized conveyor solutions for material handling',
      image: '/products/conveyor-systems.jpg',
      datasheet: '/datasheets/conveyor-systems.pdf',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-steel-dark text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-3xl">
              High-quality industrial automation and motion control components
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-blue"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-steel-light mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={product.datasheet}
                      className="text-industrial-blue hover:text-industrial-blue/80 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="mr-2" />
                      Datasheet
                    </a>
                    <button className="btn-primary">Request Quote</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl mb-8">
            Contact us for specialized automation and motion control solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919310399322"
              className="btn-primary bg-white text-industrial-blue"
            >
              Call Us
            </a>
            <a
              href="mailto:ajay.mark@indusdynatech.com"
              className="btn-secondary"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 