import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'Delivering superior quality and performance in every solution',
      icon: '⭐',
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and creative problem-solving',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical business practices',
      icon: '🤝',
    },
    {
      title: 'Partnership',
      description: 'Fostering long-term relationships with clients and suppliers',
      icon: '👥',
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Indus Dynatech</h1>
            <p className="text-xl max-w-3xl">
              Your trusted partner in industrial automation and motion control solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Vision</h2>
              <p className="text-lg text-steel-light">
                To be a leading force in revolutionizing Indian industry through world-class
                automation and motion solutions, driving efficiency, productivity, and
                innovation across manufacturing sectors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Mission</h2>
              <ul className="space-y-4 text-steel-light">
                <li className="flex items-start">
                  <span className="text-industrial-blue mr-2">•</span>
                  To deliver reliable, high-precision components and automation systems
                </li>
                <li className="flex items-start">
                  <span className="text-industrial-blue mr-2">•</span>
                  To provide industry-grade consultation, installation, and support
                </li>
                <li className="flex items-start">
                  <span className="text-industrial-blue mr-2">•</span>
                  To build long-term partnerships with global brands and Indian industries
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-steel-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Leadership</h2>
          <div className="max-w-2xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/leadership/ajay-markhedkar.jpg"
                    alt="Ajay Markhedkar"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ajay Markhedkar</h3>
                  <p className="text-industrial-blue mb-4">Founder & Leader</p>
                  <p className="text-steel-light">
                    With over 30 years of experience in industrial automation and motion
                    control, Ajay leads Indus Dynatech with a vision to transform Indian
                    manufacturing through innovative automation solutions. His expertise in
                    mechanical components and automation systems has helped numerous
                    industries optimize their operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl mb-8">
            Join us in revolutionizing industrial automation and motion control
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

export default About; 