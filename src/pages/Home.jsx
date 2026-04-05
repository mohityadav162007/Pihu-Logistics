import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import ServicesOverview from '../components/home/ServicesOverview';
import Usps from '../components/home/Usps';
import Stats from '../components/home/Stats';
import Industries from '../components/home/Industries';
import Clients from '../components/home/Clients';
import Cta from '../components/home/Cta';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <Usps />
      <Stats />
      <Industries />
      <Clients />
      <Cta />
    </div>
  );
};

export default Home;
