import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CreditCard, Building, Smartphone } from "lucide-react";

const Donations = () => {
  const accountDetails = [
    {
      type: "Bank Transfer",
      icon: Building,
      details: {
        bankName: "First Bank of Nigeria",
        accountName: "Arise in Tech Foundation",
        accountNumber: "3087654321",
        sortCode: "011152356"
      }
    },
    {
      type: "Mobile Money",
      icon: Smartphone,
      details: {
        provider: "MTN Mobile Money",
        accountName: "Arise in Tech",
        phoneNumber: "+234 XXX XXX XXXX"
      }
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
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
          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {[
              { amount: "₦10,000", impact: "Sponsors 1 student for the entire program" },
              { amount: "₦50,000", impact: "Provides laptops for 5 students" },
              { amount: "₦100,000", impact: "Funds a complete workshop session" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-green-500"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">{item.amount}</div>
                <div className="text-gray-600">{item.impact}</div>
              </div>
            ))}
          </div>

          {/* Donation Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {accountDetails.map((account, index) => (
              <Card 
                key={account.type}
                className="bg-white shadow-xl border-0 animate-fade-in hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <account.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{account.type}</CardTitle>
                  <CardDescription>Secure and verified account details</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {Object.entries(account.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-800">{value}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(value)}
                          className="h-8 w-8 p-0 hover:bg-green-100"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Every Contribution Matters</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether it's ₦1,000 or ₦100,000, your donation helps us bridge the digital divide 
                and create opportunities for young minds in Akwa Ibom. Together, we're building 
                the future of technology in Nigeria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  📧 Contact for Large Donations
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  🏢 Corporate Partnerships
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: "🔒", text: "Secure Transactions" },
                { icon: "📊", text: "Transparent Reporting" },
                { icon: "🎯", text: "Direct Impact" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-gray-600">
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
