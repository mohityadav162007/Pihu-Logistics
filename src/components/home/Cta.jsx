import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Cta = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-main text-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 lg:mb-8 tracking-tight">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Pihu Logistics for a technology-driven, robust, and highly efficient logistics network that scales with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="w-full sm:w-auto">
              Contact Sales
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-main">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
