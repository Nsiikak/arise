import { GraduationCap, Briefcase, Pen } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "100% Free Program",
      description: "No cost to students - education should be accessible to all",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Expert Mentorship",
      description: "Learn from industry professionals and experienced developers",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: Pen,
      title: "Head Start in Tech",
      description: "Get ahead of the curve with practical skills and knowledge",
      gradient: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Arise in Tech
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A free mentorship and training program for YOUTHS in Akwa Ibom
            interested in technology. We focus on software engineering, machine learning, AI and
            preparing the next generation of tech innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                <feature.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
