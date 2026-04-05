import { motion } from 'framer-motion';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 lg:py-32 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
