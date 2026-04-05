import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Warehouse, Truck, Settings, Package, ArrowRight } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      id: 'warehousing',
      icon: <Warehouse size={32} className="text-brand-main" />,
      title: 'Advanced Warehousing',
      description: 'Our 50,000+ sqft centralized processing hub is equipped with state-of-the-art infrastructure. We manage your inventory with high precision utilizing both mezzanine racks and expansive ground storage to optimize space and accessibility.',
      features: ['Automated Scanning Operations', 'Inventory Handling Systems', 'SKU-level tracking', 'Stringent HSE Practices']
    },
    {
      id: 'transportation',
      icon: <Truck size={32} className="text-brand-main" />,
      title: 'Domestic Transport & Last Mile',
      description: 'End-to-end transportation solutions ensuring your goods reach their destination safely and on time. We specialize in secondary transportation and complex last-mile delivery networks covering major geographies.',
      features: ['Pan-India Network', 'Fleet Management', 'Real-time GPS Tracking', 'Optimized Routing Algorithms']
    },
    {
      id: '3pl',
      icon: <Settings size={32} className="text-brand-main" />,
      title: 'Customized Logistics (3PL)',
      description: 'We orchestrate your entire supply chain. From managing intricate vendor relations to handling complex port clearance and freight management, we tailor our 3PL solutions to fit your unique operational footprint.',
      features: ['Vendor Management', 'Port Handling & Clearance', 'Freight Contract Management', 'Centralized Order Processing']
    },
    {
      id: 'vas',
      icon: <Package size={32} className="text-brand-main" />,
      title: 'Value Added Services',
      description: 'Beyond basic movement and storage, we offer a specialized suite of value-added services that prepare your products perfectly for the end consumer, e-commerce fulfillment, or dealer distribution network.',
      features: ['Repacking & Custom Labeling', 'Barcode Stickering', 'Strict Quality Check (QC)', 'E-commerce Readiness']
    }
  ];

  return (
    <div className="pt-24 bg-brand-light/30">
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 lg:mb-6 tracking-tight"
          >
            Capabilities & <span className="text-brand-main">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Comprehensive, technology-driven solutions architected for every critical step of your modern supply chain operation.
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="space-y-20 lg:space-y-32">
          {allServices.map((svc, index) => (
            <div key={svc.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="mb-4 lg:mb-6 inline-flex p-3 lg:p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                  {svc.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 lg:mb-6 tracking-tight">{svc.title}</h3>
                <p className="text-slate-600 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
                  {svc.description}
                </p>
                
                <h4 className="font-semibold text-brand-dark mb-4 lg:mb-5 tracking-wide text-xs lg:text-sm uppercase">Key Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {svc.features.map((feat, i) => (
                    <div key={i} className="flex items-start">
                      <ArrowRight size={18} className="text-brand-main mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-sm leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
                <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" alt={svc.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
