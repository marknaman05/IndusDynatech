import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Automation solutions for production lines, assembly systems, and quality control',
      image: '/industries/manufacturing.jpg',
      solutions: [
        'Automated assembly lines',
        'Material handling systems',
        'Quality inspection automation',
        'Process optimization',
      ],
    },
    {
      name: 'Packaging',
      description: 'High-speed packaging systems and material handling solutions',
      image: '/industries/packaging.jpg',
      solutions: [
        'Bottle filling lines',
        'Carton packaging systems',
        'Labeling machines',
        'Conveyor systems',
      ],
    },
    {
      name: 'Pharmaceutical',
      description: 'Precision automation for pharmaceutical production and packaging',
      image: '/industries/pharmaceutical.jpg',
      solutions: [
        'Clean room automation',
        'Tablet handling systems',
        'Aseptic packaging',
        'Quality control systems',
      ],
    },
    {
      name: 'Robotics',
      description: 'Motion control and automation components for robotic systems',
      image: '/industries/robotics.jpg',
      solutions: [
        'Robotic arms',
        'Automated guided vehicles',
        'Pick and place systems',
        'Collaborative robots',
      ],
    },
    {
      name: 'Material Handling',
      description: 'Efficient material handling and logistics automation',
      image: '/industries/material-handling.jpg',
      solutions: [
        'Warehouse automation',
        'Sorting systems',
        'Loading/unloading systems',
        'Pallet handling',
      ],
    },
    {
      name: 'Automotive',
      description: 'Automation solutions for automotive manufacturing and assembly',
      image: '/industries/automotive.jpg',
      solutions: [
        'Assembly line automation',
        'Parts handling systems',
        'Quality inspection',
        'Testing equipment',
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl">
              Customized automation solutions for diverse industrial sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-steel-light mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-steel">Key Solutions:</h4>
                    <ul className="list-disc list-inside text-steel-light">
                      {industry.solutions.map((solution) => (
                        <li key={solution}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Industry Expertise</h2>
            <p className="text-steel-light mb-8">
              With years of experience across multiple industries, we understand the unique
              challenges and requirements of each sector. Our team of experts works closely
              with clients to deliver tailored automation solutions that drive efficiency,
              productivity, and innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '30+', label: 'Years Experience' },
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Industry Partners' },
                { number: '24/7', label: 'Technical Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-3xl font-bold text-industrial-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-steel-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8">
            Contact us for customized automation solutions tailored to your industry needs
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

export default Industries; 