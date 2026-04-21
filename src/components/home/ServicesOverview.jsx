import { motion } from 'framer-motion';
import { Package, Truck, Warehouse, RefreshCw, BarChart, Settings } from 'lucide-react';
import Section from '../ui/Section';

const ServicesOverview = () => {
  const services = [
    { icon: <Warehouse size={24} />, title: 'Advanced Warehousing', desc: 'Secure 50,000+ sqft processing hub with mezzanine racks and ground storage.', color: 'text-amber-600', bg: 'bg-amber-50', border: 'hover:border-amber-300' },
    { icon: <Truck size={24} />, title: 'Domestic Trucking', desc: 'Reliable secondary transportation and last-mile delivery network across India.', color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-300' },
    { icon: <Settings size={24} />, title: 'Customized Logistics', desc: 'Tailored 3PL solutions spanning vendor management to port handling.', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-300' },
    { icon: <Package size={24} />, title: 'Value Added Services', desc: 'Repacking, labeling, barcode stickering, and specialized e-commerce handling.', color: 'text-teal-600', bg: 'bg-teal-50', border: 'hover:border-teal-300' },
    { icon: <RefreshCw size={24} />, title: 'End-to-End Flow', desc: 'Seamless orchestration from Vendor to Transport to Customer.', color: 'text-violet-600', bg: 'bg-violet-50', border: 'hover:border-violet-300' },
    { icon: <BarChart size={24} />, title: 'Digital Solutions', desc: 'Cloud-based collaborative platforms offering deep data insights.', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'hover:border-cyan-300' },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mb-16">
        <span className="text-brand-main font-semibold tracking-wider text-sm uppercase mb-3 block">Expertise</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 tracking-tight">Integrated Supply Solutions</h2>
        <p className="text-slate-600 text-lg leading-relaxed">We manage the complete lifecycle of your supply chain operations, ensuring efficiency, productivity, and measurable analytics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-slate-50 border border-slate-100 p-8 rounded-lg ${service.border} hover:bg-white hover:shadow-lg transition-all duration-300 group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className={`w-12 h-12 ${service.bg} border border-slate-200 rounded-md flex items-center justify-center ${service.color} mb-6 transition-colors duration-300 shadow-sm`}>
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-3">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesOverview;
