import { motion } from 'framer-motion';
import containerYard from '../../assets/container_yard.png';

const AboutUsSection = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase"
            >
              About Us
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight"
            >
              Built for Indian supply chains that cannot afford guesswork.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 leading-relaxed mb-12 text-lg"
            >
              From purchase order intake to warehouse processing, route coordination and delivery proof, Pihu Logistics gives growing companies a practical operations backbone with registered, accountable infrastructure.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">sq ft central processing hub</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">trained logistics team members</div>
              </motion.div>
            </div>
          </div>

          {/* Right Image with Overlays */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={containerYard} alt="Container Yard" className="w-full h-[500px] object-cover opacity-80" />
              
              {/* Overlays on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">GST Registered</div>
                  <div className="text-xs font-bold">23CBPPSS022H1ZZ</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">MSME Registered</div>
                  <div className="text-xs font-bold">Certified operations</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
