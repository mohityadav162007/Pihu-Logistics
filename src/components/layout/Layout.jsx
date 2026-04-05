import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from '../ui/FloatingActions';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-slate-900 bg-brand-light/20">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Layout;
