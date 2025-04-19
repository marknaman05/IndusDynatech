import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Technical Consultation',
      description: 'Expert guidance on automation and motion control solutions',
      icon: '💡',
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of automation components and systems',
      icon: '⚙️',
    },
    {
      title: 'Installation & Commissioning',
      description: 'Professional installation and setup of automation systems',
      icon: '🔧',
    },
    {
      title: 'Maintenance & Support',
      description: 'Regular maintenance and technical support services',
      icon: '🛠️',
    },
    {
      title: 'Training Programs',
      description: 'Comprehensive training on automation systems and components',
      icon: '📚',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored automation solutions for specific requirements',
      icon: '🎯',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive automation and motion control solutions for your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-steel-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Our Service Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Understanding your requirements and challenges',
                },
                {
                  step: '2',
                  title: 'Solution Design',
                  description: 'Creating a customized automation solution',
                },
                {
                  step: '3',
                  title: 'Implementation',
                  description: 'Professional installation and setup',
                },
                {
                  step: '4',
                  title: 'Training & Support',
                  description: 'Comprehensive training and ongoing support',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-industrial-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-steel-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your automation needs
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

export default Services; 