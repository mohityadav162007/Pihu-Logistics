import { motion } from 'framer-motion';
import { Warehouse, Truck, Settings, Globe } from 'lucide-react';
import containerYard from '../../assets/container_yard.png';

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Text Content */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase"
            >
              Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight tracking-tight"
            >
              Integrated logistics for the way India moves.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 leading-relaxed mb-8"
            >
              Pihu Logistics combines physical infrastructure with process discipline, helping brands manage storage, dispatch, transport and delivery proof from one accountable partner.
            </motion.p>
          </div>

          {/* Right Grid Content */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Warehousing Card - Span 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row bg-slate-50/50"
            >
              <div className="p-10 flex-1">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                  <Warehouse size={20} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Warehousing</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Organised storage, inward scanning, inventory discipline and dispatch-ready zones for fast-moving SKUs.
                </p>
              </div>
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img src={containerYard} alt="Warehouse" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Trucking Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 rounded-3xl bg-slate-50/50"
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                <Truck size={20} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Domestic Trucking</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reliable transport planning for local, regional and long-haul distribution across Indian trade routes.
              </p>
            </motion.div>

            {/* Customized Logistics Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-dark p-10 rounded-3xl text-white shadow-xl"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                <Settings size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customized Logistics</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                SOP-led fulfilment models for marketplace sellers, D2C brands, distributors and B2B dispatch teams.
              </p>
            </motion.div>

            {/* Digital Integrations Card - Span 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-brand-blue p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="flex-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                  <Globe size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Integrations</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                  Cloud dashboards, shipment status, milestone alerts and proof-of-delivery workflows that keep teams aligned.
                </p>
              </div>
              <button className="bg-white text-brand-blue px-8 py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 text-sm whitespace-nowrap">
                Discuss Scope
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
