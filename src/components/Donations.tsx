import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Smartphone } from "lucide-react";

const Donations = () => {
  const donationMethods = [
    {
      type: "Bank Transfer",
      icon: Building,
      description:
        "Support us via direct bank transfer. Verified details will be provided on request.",
    },
    {
      type: "Mobile Money",
      icon: Smartphone,
      description:
        "Donate conveniently via mobile money. Secure details will be shared on request.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us empower the next generation of tech innovators in Akwa Ibom.
            Your donation directly funds our programs, resources, and mentorship initiatives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Impact Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {[
              { title: "Student Sponsorship", impact: "Covers training materials and mentorship for one participant." },
              { title: "Equipment Support", impact: "Provides laptops and essential digital tools for learners." },
              { title: "Workshop & Training Support", impact: "Funds logistics, facilitators, and resources for a full session." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-green-500"
              >
                <div className="text-xl font-bold text-green-600 mb-2">{item.title}</div>
                <div className="text-gray-600">{item.impact}</div>
              </div>
            ))}
          </div>

          {/* Donation Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {donationMethods.map((method, index) => (
              <Card
                key={method.type}
                className="bg-white shadow-xl border-0 animate-fade-in hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{method.type}</CardTitle>
                  <CardDescription>Secure and verified donation channel</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-center">
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                  >
                    Request Donation Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Every Contribution Matters
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Your donation helps us bridge the digital divide
                and create opportunities for young minds in Akwa Ibom. Together, we are building
                the future of technology in Nigeria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Contact for Large Donations
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Corporate Partnerships
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 text-center animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: "🔒", text: "Secure Transactions" },
                { icon: "📊", text: "Transparent Reporting" },
                { icon: "🎯", text: "Direct Impact" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-gray-600"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;