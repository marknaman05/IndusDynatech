import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const brandLogos = [
    { name: 'Pisco Pneumatics', image: '/brands/pisco.png' },
    { name: 'Festo', image: '/brands/festo.png' },
    { name: 'NSK RHP', image: '/brands/nsk.png' },
    { name: 'THK', image: '/brands/thk.png' },
    { name: 'Schneeberger', image: '/brands/schneeberger.png' },
    { name: 'SRBF', image: '/brands/srbf.png' },
    { name: 'FAG', image: '/brands/fag.png' },
    { name: 'ACE Shock Absorbers', image: '/brands/ace.png' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-steel-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Industrial Motion & Automation
              </h1>
              <p className="text-xl mb-8">
                Your trusted partner for high-precision automation components and solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-quote" className="btn-primary">
                  Request Quote
                </Link>
                <Link to="/products" className="btn-secondary">
                  Explore Products
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/hero-image.jpg"
                alt="Industrial Automation"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Products</h2>
          <p className="section-subtitle text-center">
            High-quality components for industrial automation and motion control
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Linear Motion Systems',
                description: 'Precision linear guides and bearings for smooth motion control',
                image: '/products/linear-motion.jpg',
              },
              {
                title: 'Pneumatic Solutions',
                description: 'Reliable pneumatic components for automation systems',
                image: '/products/pneumatics.jpg',
              },
              {
                title: 'Actuators',
                description: 'Electric and pneumatic actuators for precise positioning',
                image: '/products/actuators.jpg',
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-steel-light mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-industrial-blue hover:text-industrial-blue/80"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Trusted Brands</h2>
          <p className="section-subtitle text-center">
            We partner with world-leading manufacturers to bring you the best solutions
          </p>
          <Slider {...sliderSettings} className="mt-8">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8">
            Contact us today for expert consultation and customized solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-industrial-blue">
              Contact Us
            </Link>
            <Link to="/request-quote" className="btn-secondary">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 