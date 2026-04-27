import { motion } from 'framer-motion';

const Workflow = () => {
  const steps = [
    {
      id: '01',
      title: 'PO Intake',
      desc: 'Orders are captured, checked and prepared for fulfilment with clean documentation.'
    },
    {
      id: '02',
      title: 'Inventory Processing',
      desc: 'Warehouse teams manage inward, storage, picking and dispatch-ready staging.'
    },
    {
      id: '03',
      title: 'Transport Coordination',
      desc: 'Domestic trucking is planned around route, load, timing and delivery priority.'
    },
    {
      id: '04',
      title: 'Proof of Delivery',
      desc: 'Delivery confirmation and status updates close the loop for finance and operations.'
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-bold tracking-widest text-[10px] mb-4 uppercase"
            >
              Digital Workflow
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-brand-dark mb-6 leading-tight tracking-tight"
            >
              From Purchase Order to Proof of Delivery.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 leading-relaxed"
            >
              A disciplined operating rhythm gives your team clarity at every milestone without chasing calls or spreadsheets.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 relative group"
              >
                <div className="text-brand-blue font-bold text-sm mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/0 group-hover:bg-brand-blue/[0.02] rounded-tr-3xl transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
