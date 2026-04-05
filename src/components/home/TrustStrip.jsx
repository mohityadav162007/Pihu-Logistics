import { ShieldCheck, Building, Users, Award } from 'lucide-react';

const TrustStrip = () => {
  const items = [
    { icon: <ShieldCheck className="w-6 h-6 text-brand-main" />, title: "GST Registered", subtitle: "23CSBPS5022H1ZZ" },
    { icon: <Award className="w-6 h-6 text-brand-main" />, title: "MSME Registered", subtitle: "Certified Operations" },
    { icon: <Building className="w-6 h-6 text-brand-main" />, title: "50,000+ sqft", subtitle: "Central Processing Hub" },
    { icon: <Users className="w-6 h-6 text-brand-main" />, title: "100+ Team", subtitle: "Dedicated Workforce" },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-5 group">
              <div className="p-3 bg-brand-light rounded-md border border-slate-100 group-hover:bg-brand-main/10 transition-colors duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
