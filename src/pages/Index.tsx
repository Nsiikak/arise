import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Outreach from "@/components/Outreach";
import ProgramDetails from "@/components/ProgramDetails";
import GetInvolved from "@/components/GetInvolved";
import Founder from "@/components/Founder";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Outreach />
      <ProgramDetails />
      <GetInvolved />
      <Founder />
      <Donations />
      <Footer />
    </div>
  );
};

export default Index;
