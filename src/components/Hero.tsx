import { Button } from "@/components/ui/button";
import { Star, Laptop } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 pt-16">
      <div className="absolute inset-0 opacity-60">
        <div className="w-full h-full bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f6ecff9c-5d7c-4261-b6c0-a16283ad41d7.png" 
              alt="Arise in Tech Logo" 
              className="w-24 h-24 mx-auto mb-6 hover-scale"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-gradient">
              Arise in Tech
            </span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-orange-600 font-semibold mb-4">
            Akwa Ibom
          </p>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 font-medium">
            Ibom Roots, Global Tech Futures
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering secondary school students in Akwa Ibom with free tech mentorship, 
            hands-on training, and the skills needed to thrive in the global technology landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 text-lg rounded-full hover:shadow-xl transition-all duration-300 hover-scale"
            >
              🚀 Learn More
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 hover-scale"
            >
              📞 Contact Us
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "6+", label: "Schools Reached" },
              { number: "100+", label: "Students Inspired" },
              { number: "100%", label: "Free Program" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Aligned Floating Icons */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <Star className="w-12 h-12 text-yellow-500" />
      </div>
      <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '2s' }}>
        <Laptop className="w-12 h-12 text-blue-500" />
      </div>
      <div className="absolute bottom-32 left-20 text-3xl animate-bounce" style={{ animationDelay: '3s' }}>
        🚀
      </div>
    </section>
  );
};

export default Hero;
