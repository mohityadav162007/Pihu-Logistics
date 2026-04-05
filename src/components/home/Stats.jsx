import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "2017", label: "Founded" },
    { value: "100+", label: "Professionals" },
    { value: "5", label: "Owned Facilities" },
    { value: "15+", label: "Regional Partners" }
  ];

  return (
    <div className="bg-brand-dark py-20 border-y border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="px-6 border-l border-slate-700/50"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-3 text-white tracking-tight">{stat.value}</div>
              <div className="text-brand-main font-semibold text-xs tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
