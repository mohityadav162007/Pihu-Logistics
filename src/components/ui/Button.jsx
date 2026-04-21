import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 rounded-md font-semibold text-sm tracking-wide transition-all duration-300 inline-flex items-center justify-center focus:outline-none";
  
  const variants = {
    primary: "bg-brand-main text-white hover:bg-blue-700 shadow-md hover:shadow-lg shadow-brand-main/20",
    secondary: "bg-brand-dark text-white hover:bg-slate-800 shadow-md hover:shadow-lg",
    outline: "bg-transparent text-slate-900 border border-slate-300 hover:border-slate-900 hover:bg-slate-50",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
