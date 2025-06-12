
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Gift } from "lucide-react";

const GetInvolved = () => {
  const sponsorTypes = [
    {
      icon: Users,
      title: "Mentorship Partner", 
      description: "Provide expert mentors and guest speakers for our sessions",
      amount: "Time & Expertise",
      benefits: ["Direct student impact", "Talent pipeline", "Brand visibility"],
      buttonText: "Become a Mentorship Partner"
    },
    {
      icon: Briefcase,
      title: "Corporate Sponsor",
      description: "Major funding partner for program expansion and equipment",
      amount: "₦500,000+",
      benefits: ["Premier branding", "Student internships", "Long-term partnership"],
      buttonText: "Become a Corporate Sponsor"
    },
    {
      icon: Gift,
      title: "In-Kind Sponsor",
      description: "Donate laptops, internet access, or venue space",
      amount: "Equipment/Services",
      benefits: ["Tax benefits", "Direct contribution", "Community goodwill"],
      buttonText: "Become an In-Kind Sponsor"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Support our mission to empower Akwa Ibom's youth through tech education. 
            Your contribution helps us provide free mentorship, resources, and opportunities 
            for students to excel in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sponsorTypes.map((sponsor, index) => (
            <div 
              key={sponsor.title}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-orange-400 text-white flex items-center justify-center shadow-lg`}>
                  <sponsor.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                  {sponsor.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {sponsor.description}
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-semibold">{sponsor.amount}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Benefits</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {sponsor.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 text-center">
                <Button className="bg-gradient-to-r from-green-600 to-orange-500 text-white px-4 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-sm">
                  {sponsor.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to make a difference?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join us in empowering the next generation of tech leaders in Akwa Ibom. 
            Whether you're an individual, a company, or an organization, there's a place for you 
            in our mission.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover-scale">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

