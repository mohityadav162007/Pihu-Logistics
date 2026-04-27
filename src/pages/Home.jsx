import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import Stats from '../components/home/Stats';
import Workflow from '../components/home/Workflow';
import CTASection from '../components/home/CTASection';
import AboutUsSection from '../components/home/AboutUsSection';

const Home = () => {
  return (
    <div className="bg-brand-light">
      <Hero />
      <Stats />
      <ServicesOverview />
      <Workflow />
      <AboutUsSection />
      <CTASection />
    </div>
  );
};

export default Home;
