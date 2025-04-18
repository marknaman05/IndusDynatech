import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brands = () => {
  const brands = [
    {
      name: 'Pisco Pneumatics',
      logo: '/brands/pisco.png',
      description: 'Leading manufacturer of pneumatic components and systems',
      products: ['Pneumatic cylinders', 'Valves', 'Fittings', 'Vacuum components'],
    },
    {
      name: 'Festo',
      logo: '/brands/festo.png',
      description: 'Global leader in automation technology and technical education',
      products: ['Pneumatic systems', 'Electric drives', 'Control systems', 'Training systems'],
    },
    {
      name: 'NSK RHP',
      logo: '/brands/nsk.png',
      description: 'World-class manufacturer of bearings and motion control products',
      products: ['Ball bearings', 'Linear guides', 'Ball screws', 'Actuators'],
    },
    {
      name: 'THK',
      logo: '/brands/thk.png',
      description: 'Innovative manufacturer of linear motion systems',
      products: ['Linear guides', 'Ball screws', 'Actuators', 'Cross roller guides'],
    },
    {
      name: 'Schneeberger',
      logo: '/brands/schneeberger.png',
      description: 'Specialist in linear motion technology and machine tools',
      products: ['Linear guides', 'Linear modules', 'Machine tools', 'Accessories'],
    },
    {
      name: 'SRBF',
      logo: '/brands/srbf.png',
      description: 'Premium manufacturer of bearings and power transmission products',
      products: ['Bearings', 'Bearing units', 'Power transmission', 'Linear motion'],
    },
    {
      name: 'FAG',
      logo: '/brands/fag.png',
      description: 'Global leader in rolling bearing technology',
      products: ['Rolling bearings', 'Plain bearings', 'Linear technology', 'Services'],
    },
    {
      name: 'ACE Shock Absorbers',
      logo: '/brands/ace.png',
      description: 'Specialist in industrial damping technology',
      products: ['Shock absorbers', 'Vibration dampers', 'Safety products', 'Accessories'],
    },
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
      <section className="bg-steel-dark text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Brand Partners</h1>
            <p className="text-xl max-w-3xl">
              Partnering with world-leading manufacturers to bring you the best automation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
                  <p className="text-steel-light mb-4">{brand.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-steel">Key Products:</h4>
                    <ul className="list-disc list-inside text-steel-light">
                      {brand.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Trusted by Industry Leaders</h2>
          <Slider {...sliderSettings} className="mt-8">
            {brands.map((brand) => (
              <div key={brand.name} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Why Partner with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: 'Technical Expertise',
                  description: 'In-depth knowledge of products and applications',
                },
                {
                  title: 'Market Reach',
                  description: 'Strong presence across multiple industries',
                },
                {
                  title: 'Customer Support',
                  description: 'Dedicated support team for all your needs',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Rigorous quality control and testing procedures',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-steel-light">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
          <p className="text-xl mb-8">
            Contact us to explore partnership opportunities with Indus Dynatech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919310399322"
              className="btn-primary bg-white text-industrial-blue"
            >
              Call Us
            </a>
            <a
              href="mailto:info@indusdynatech.com"
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

export default Brands; 