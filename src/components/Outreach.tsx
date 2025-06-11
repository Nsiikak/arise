import { Button } from "@/components/ui/button";

const Outreach = () => {
  const schools = [
    {
      name: "Government Secondary School, Uyo",
      status: "Visited",
      students: 45,
      feedback: "Incredibly inspiring! Students were amazed by the possibilities."
    },
    {
      name: "Holy Child Secondary School",
      status: "Visited", 
      students: 38,
      feedback: "The interactive sessions got everyone excited about coding."
    },
    {
      name: "Community Secondary School, Ikot Ekpene",
      status: "Scheduled",
      students: 0,
      feedback: ""
    },
    {
      name: "Methodist High School, Oron",
      status: "Planned",
      students: 0,
      feedback: ""
    }
  ];

  const stats = [
    { number: "6+", label: "Schools Reached", icon: "🏫" },
    { number: "2+", label: "Schools Visited", icon: "✅" },
    { number: "100+", label: "Students Inspired", icon: "👨‍🎓" },
    { number: "∞", label: "Dreams Unlocked", icon: "🌟" }
  ];

  const testimonials = [
    {
      text: "This program opened my eyes to the possibilities in technology. I never knew coding could be this exciting!",
      student: "Blessing A.",
      school: "Government Secondary School, Uyo"
    },
    {
      text: "The mentors were amazing and made complex concepts easy to understand. Now I want to study Computer Science!",
      student: "Emmanuel U.",
      school: "Methodist High School, Ikot Ekpene"
    }
  ];

  return (
    <section id="outreach" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            School Outreach Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Inspired by a founder who grew up with limited tech access, this initiative 
            aims to ensure every young person in Akwa Ibom has the opportunity to explore 
            and excel in technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <div className="text-orange-400 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                {testimonial.text}
              </p>
              <div className="border-t pt-4">
                <div className="font-bold text-green-600">{testimonial.student}</div>
                <div className="text-gray-600 text-sm">{testimonial.school}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <p className="text-2xl font-bold text-orange-600 bg-white rounded-full px-8 py-4 inline-block shadow-lg">
            🚀 More schools are coming...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
