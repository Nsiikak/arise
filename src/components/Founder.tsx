import { Button } from "@/components/ui/button";
import { Twitter, Linkedin } from "lucide-react";

const Founder = () => {
  const founders = [
    {
      name: "Nsikak-Abasi Ebong",
      title: "Founder, Arise in Tech",
      image: "Nsikak.JPEG",
      twitter: "https://x.com/Nsitheenigma_",
      linkedin: "https://www.linkedin.com/in/nsikak-abasi-ebong98"
    },
    {
      name: "Ezekiel Ikinwot",
      title: "Co-Founder, Arise in Tech",
      image: null,
      twitter: "#",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate leaders dedicated to transforming tech education in Akwa Ibom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-green-400 to-orange-400 flex items-center justify-center shadow-lg">
                      <span className="text-4xl text-white font-bold">
                        {founder.name.charAt(1)}
                      </span>
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    PROGRAM FOUNDER
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{founder.title}</p>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={founder.twitter}
                    className="rounded-full p-3 border border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="11"
                      viewBox="0 0 1200 1227"
                      fill="currentColor"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full p-3 border-blue-600 text-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
