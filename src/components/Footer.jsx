import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Brands', path: '/brands' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Linear Motion', path: '/products#linear-motion' },
        { name: 'Bearings', path: '/products#bearings' },
        { name: 'Pneumatics', path: '/products#pneumatics' },
        { name: 'Actuators', path: '/products#actuators' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Request Quote', path: '/request-quote' },
        { name: 'Technical Support', path: '/services#support' },
        { name: 'FAQs', path: '/faqs' },
      ],
    },
  ];

  return (
    <footer className="bg-steel-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Indus Dynatech Solutions</h3>
            <p className="mb-4">Empowering Industrial Motion & Automation</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+919310399322" className="hover:text-industrial-blue">
                  +91 9310399322
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:ajay.mark@indusdynatech.com" className="hover:text-industrial-blue">
                  ajay.mark@indusdynatech.com
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-industrial-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Indus Dynatech Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://wa.me/919310399322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-industrial-green"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 