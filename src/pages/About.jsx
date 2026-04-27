import { motion } from 'framer-motion';
import containerYard from '../assets/container_yard.png';
import warehouseHero from '../assets/warehouse_hero.png';

const About = () => {
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
            <div className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase">Company</div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Modernizing Indian <br />
              <span className="text-brand-blue">Supply Chains.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Since 2017, Pihu Logistics has been building the physical and digital backbone for businesses that demand reliability and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate History */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase"
              >
                History
              </motion.div>
              <h2 className="text-4xl font-bold text-brand-dark mb-8 leading-tight tracking-tight">
                Structured for Scale Since 2017
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Pihu Logistics has systematically modernized the logistics landscape by integrating deep technology with robust physical infrastructure. We recognized early that superior logistics requires more than just square footage and fleets.
                </p>
                <p>
                  We operate a centralized processing hub that brings your entire supply chain onto a single, cloud-based collaborative framework. This ensures operational transparency and unmatched agility for Indian businesses.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
              >
                <img src={warehouseHero} alt="Warehouse Operations" className="w-full h-[400px] object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Compliance */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase">Governance</div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Uncompromising Standards</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We engineer strict safety protocols for our workforce while securing the integrity of your products through total compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "GST Registered", 
                desc: "Fully compliant operations and transparent invoicing.",
                val: "23CBPPSS022H1ZZ"
              },
              { 
                title: "MSME Certified", 
                desc: "Enterprise-level capability with organizational agility.",
                val: "Udyam Aadhar"
              },
              { 
                title: "HSE Framework", 
                desc: "Comprehensive Health, Safety, and Environment protocols.",
                val: "100% Adherence"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">{item.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-200 pt-16">
            {[
              { val: "50,000+", lab: "Sq Ft Warehouse" },
              { val: "100+", lab: "Team Members" },
              { val: "2017", lab: "Founded Year" },
              { val: "100%", lab: "Compliance" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-brand-dark mb-2">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
