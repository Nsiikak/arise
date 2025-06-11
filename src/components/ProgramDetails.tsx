import { Calendar, Clock, MapPin, Laptop, Zap, Coffee } from "lucide-react";

const ProgramDetails = () => {
  const scheduleItems = [
    {
      icon: Calendar,
      label: "Duration",
      value: "3 Weeks",
      detail: "Intensive learning experience"
    },
    {
      icon: Calendar,
      label: "Days",
      value: "Saturdays",
      detail: "Weekend-friendly schedule"
    },
    {
      icon: Clock,
      label: "Time",
      value: "9AM – 12PM",
      detail: "3 hours of focused learning"
    },
    {
      icon: MapPin,
      label: "Dates",
      value: "June 14, 21, 28",
      detail: "Mark your calendars!"
    }
  ];

  const bringItems = [
    { icon: Laptop, item: "Laptop", description: "Your learning companion" },
    { icon: Zap, item: "Charger", description: "Keep the power flowing" },
    { iconEmoji: "🚀", item: "Enthusiasm", description: "Most important ingredient!" }
  ];

  const getItems = [
    "Hands-on coding experience",
    "Career path exploration", 
    "Tech entrepreneurship insights",
    "Industry mentorship",
    "Real-world project exposure",
    "Networking opportunities"
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Program Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about joining our tech mentorship program
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Schedule */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl animate-fade-in">
            <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
              📅 Schedule
            </h3>
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                    <div className="text-gray-600">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> No sessions during cultural or religious celebrations
              </p>
            </div>
          </div>

          {/* What to Bring */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">
              🎒 What to Bring
            </h3>
            <div className="space-y-6">
              {bringItems.map((item, index) => (
                <div key={item.item} className="flex items-center gap-4">
                  <div className="text-3xl">
                    {item.iconEmoji ? item.iconEmoji : <item.icon className="w-8 h-8 text-orange-600" />}
                  </div>
                  <div>
                    <div className="text-lg text-gray-700 font-medium">{item.item}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📶</span>
                <span className="font-semibold text-blue-800">We Provide:</span>
              </div>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Fast internet connection</li>
                <li>• Refreshments & snacks</li>
                <li>• Learning materials</li>
              </ul>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
              🎁 What You'll Get
            </h3>
            <div className="space-y-4">
              {getItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="text-gray-700 font-medium">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
