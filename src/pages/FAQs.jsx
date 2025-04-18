import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What is Indus Dynatech?',
          answer: 'Indus Dynatech is a leading provider of industrial automation and motion control solutions. We specialize in delivering high-quality components and systems for various industries, helping businesses optimize their operations through advanced automation technology.'
        },
        {
          question: 'Where is Indus Dynatech located?',
          answer: 'Our headquarters is located in Greater Noida, Uttar Pradesh, India. We serve clients across India and have a growing international presence.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including manufacturing, automotive, aerospace, food processing, packaging, pharmaceuticals, and more. Our solutions are tailored to meet the specific needs of each industry.'
        }
      ]
    },
    {
      title: 'Products & Services',
      questions: [
        {
          question: 'What types of products do you offer?',
          answer: 'We offer a comprehensive range of products including linear motion bearings, pillow blocks, circular bearings, pneumatic fittings, air operated pinch valves, ball screws, electromechanical actuators, shock absorbers, gas springs, conveyors, and custom automation solutions.'
        },
        {
          question: 'Do you provide custom automation solutions?',
          answer: 'Yes, we specialize in developing custom automation solutions tailored to your specific requirements. Our team of experts works closely with clients to design and implement solutions that optimize their operations.'
        },
        {
          question: 'What brands do you work with?',
          answer: 'We partner with leading global brands in the automation and motion control industry. Our partnerships allow us to provide high-quality, reliable products and solutions to our clients.'
        }
      ]
    },
    {
      title: 'Technical Support',
      questions: [
        {
          question: 'Do you provide technical support?',
          answer: 'Yes, we offer comprehensive technical support for all our products and solutions. Our team of experts is available to assist with installation, troubleshooting, and maintenance.'
        },
        {
          question: 'How can I get technical assistance?',
          answer: 'You can reach our technical support team through multiple channels: phone, email, or through our contact form. We also provide on-site support when needed.'
        },
        {
          question: 'Do you offer training for your products?',
          answer: 'Yes, we provide training programs for our products and systems. These programs are designed to help your team maximize the benefits of our solutions.'
        }
      ]
    },
    {
      title: 'Ordering & Delivery',
      questions: [
        {
          question: 'How can I place an order?',
          answer: 'You can place orders through our website, by phone, or by email. We also have a dedicated sales team that can assist you with the ordering process.'
        },
        {
          question: 'What is your delivery time?',
          answer: 'Delivery times vary depending on the product and your location. Standard products typically ship within 2-3 business days, while custom solutions may require additional time for manufacturing and testing.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we offer international shipping to various countries. Please contact our sales team for specific shipping information and rates.'
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl">
              Find answers to common questions about our products, services, and operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-steel-dark mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const questionIndex = categoryIndex * 3 + index;
                    const isOpen = openIndex === questionIndex;
                    
                    return (
                      <motion.div
                        key={item.question}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => toggleQuestion(questionIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="font-medium text-steel-dark">{item.question}</span>
                          {isOpen ? <FaChevronUp className="text-industrial-blue" /> : <FaChevronDown className="text-industrial-blue" />}
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-steel-light">{item.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8">
            Contact our team for personalized assistance
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

export default FAQs; 