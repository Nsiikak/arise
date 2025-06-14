import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Outreach", href: "#outreach" },
    { name: "Program", href: "#program" },
    { name: "Contact", href: "#contact" }
  ];

  const partners = [
    {
      name: "Ibom Tech Park",
      type: "Technology Partner",
      status: "active"
    },
    {
      name: "NEEB's Marine and Maritime Consultants",
      type: "Corporate Sponsor",
      status: "active"
    },
    {
      name: "Future Sponsors",
      type: "Open Partnership",
      status: "pending"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234 XXX XXX XXXX",
      href: "tel:+234XXXXXXXXX"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ariseintechakwaibom@gmail.com",
      href: "mailto:ariseintechakwaibom@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Uyo, Akwa Ibom State",
      href: "#"
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="mb-6">
              <img
                src="Arise.PNG"
                alt="Arise in Tech Logo"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Arise in Tech</h3>
              <p className="text-orange-300 text-lg font-semibold">
                Ibom Roots, Global Tech Futures
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering the next generation of tech innovators in Akwa Ibom through
              mentorship, training, and hands-on learning experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-gray-900"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-gray-900"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="text-xl font-bold mb-6 text-orange-300">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-300 transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h4 className="text-xl font-bold mb-6 text-orange-300">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                    {contact.href !== "#" ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-orange-300 transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter/CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h4 className="text-xl font-bold mb-6 text-orange-300">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest updates about our programs and opportunities.
            </p>
            <Button
              className="bg-gradient-to-r from-green-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg w-full"
            >
              📧 Subscribe to Updates
            </Button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-700 pt-12 mb-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4 text-orange-300">Our Partners & Sponsors</h4>
            <p className="text-gray-300 mb-6">
              Working together to build the future of tech in Akwa Ibom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`bg-gray-800 rounded-lg p-6 border transition-all duration-300 hover:shadow-xl hover:scale-105 ${partner.status === 'active'
                    ? 'border-green-500 bg-gradient-to-br from-gray-800 to-green-900/20'
                    : 'border-gray-600 border-dashed'
                  }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${partner.status === 'active'
                      ? 'bg-gradient-to-br from-green-500 to-orange-500'
                      : 'bg-gray-600'
                    }`}>
                    <span className="text-2xl">
                      {partner.status === 'active' ? '🤝' : '📝'}
                    </span>
                  </div>
                  <h5 className="text-lg font-semibold text-white mb-2">{partner.name}</h5>
                  <p className="text-sm text-gray-400 mb-3">{partner.type}</p>
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${partner.status === 'active'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-orange-500/20 text-orange-300'
                    }`}>
                    {partner.status === 'active' ? 'Active Partner' : 'Open for Partnership'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              🤝 Become a Partner
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <p className="text-gray-400">
            © 2025 Arise in Tech - Akwa Ibom. All rights reserved.
            <span className="mx-2">|</span>
            Built with ❤️ for the future of tech in Akwa Ibom, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
