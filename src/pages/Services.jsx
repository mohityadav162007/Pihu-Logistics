import { motion } from 'framer-motion';
import { Warehouse, Truck, Settings, Globe, ArrowRight } from 'lucide-react';
import containerYard from '../assets/container_yard.png';
import warehouseHero from '../assets/warehouse_hero.png';

const Services = () => {
  const allServices = [
    {
      id: 'warehousing',
      icon: <Warehouse size={24} />,
      title: 'Advanced Warehousing',
      description: 'Our 50,000+ sqft centralized processing hub is equipped with state-of-the-art infrastructure. We manage your inventory with high precision utilizing both mezzanine racks and expansive ground storage.',
      features: ['Automated Scanning', 'Inventory Handling', 'SKU-level tracking', 'HSE Practices'],
      image: warehouseHero
    },
    {
      id: 'transportation',
      icon: <Truck size={24} />,
      title: 'Domestic Transport',
      description: 'End-to-end transportation solutions ensuring your goods reach their destination safely and on time. We specialize in secondary transportation and complex last-mile delivery networks.',
      features: ['Pan-India Network', 'Fleet Management', 'GPS Tracking', 'Optimized Routing'],
      image: containerYard
    },
    {
      id: '3pl',
      icon: <Settings size={24} />,
      title: 'Customized Logistics',
      description: 'We orchestrate your entire supply chain. From managing intricate vendor relations to handling complex port clearance and freight management, we tailor our 3PL solutions.',
      features: ['Vendor Management', 'Port Handling', 'Freight Management', 'Order Processing'],
      image: warehouseHero
    },
    {
      id: 'digital',
      icon: <Globe size={24} />,
      title: 'Digital Integrations',
      description: 'Cloud dashboards, shipment status, milestone alerts and proof-of-delivery workflows that keep teams aligned. We provide tech-first visibility into every movement.',
      features: ['Live Dashboards', 'API Integrations', 'Real-time Alerts', 'Online POD'],
      image: containerYard
    }
  ];

  return (
    <div className="bg-brand-light">
      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase">Capabilities</div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Comprehensive <br />
              Logistics <span className="text-brand-blue">Solutions.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              We provide technology-driven infrastructure that empowers Indian businesses to scale without operational friction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 space-y-12">
          {allServices.map((svc, index) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2.5rem] bg-white overflow-hidden border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8">
                  {svc.icon}
                </div>
                <h3 className="text-3xl font-bold text-brand-dark mb-6">{svc.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                  {svc.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {svc.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/5 relative min-h-[300px]">
                <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-blue/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
