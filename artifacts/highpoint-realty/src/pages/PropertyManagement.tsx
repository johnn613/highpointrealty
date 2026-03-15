import { Link } from "wouter";
import { Users, CreditCard, Wrench, ClipboardCheck, FileText, BarChart, Phone, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Users size={28} className="text-[#C9A84C]" />,
    title: "Tenant Screening",
    desc: "Comprehensive background checks, credit reports, and rental history verification to find quality tenants.",
  },
  {
    icon: <CreditCard size={28} className="text-[#C9A84C]" />,
    title: "Rent Collection",
    desc: "Reliable monthly rent collection with online payment options and prompt disbursement to owners.",
  },
  {
    icon: <Wrench size={28} className="text-[#C9A84C]" />,
    title: "Maintenance Coordination",
    desc: "24/7 maintenance request handling with a network of trusted local contractors at competitive rates.",
  },
  {
    icon: <ClipboardCheck size={28} className="text-[#C9A84C]" />,
    title: "Property Inspections",
    desc: "Regular move-in, move-out, and routine inspections to protect your investment and document conditions.",
  },
  {
    icon: <FileText size={28} className="text-[#C9A84C]" />,
    title: "Lease Preparation",
    desc: "Professional lease agreements that protect your rights and comply with Kentucky landlord-tenant law.",
  },
  {
    icon: <BarChart size={28} className="text-[#C9A84C]" />,
    title: "Financial Reporting",
    desc: "Monthly and annual financial statements, expense tracking, and owner portal access.",
  },
];

const benefits = [
  "Licensed and insured property management professionals",
  "Deep knowledge of Kentucky landlord-tenant law",
  "Flat-fee pricing with no hidden costs",
  "Average vacancy fill time under 30 days",
  "24/7 emergency maintenance response",
  "Owner portal with real-time reporting",
];

export default function PropertyManagement() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Property Management Services</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Let High Point Realty & Auction handle your investment properties with professionalism and care, maximizing your returns and minimizing your stress.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">What We Handle</h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-[#1B2D4F]/5 rounded-xl flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1B2D4F] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Our Approach */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Our Management Approach</h2>
              <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                At High Point Realty & Auction, we treat your investment property like our own. Our property management services are built on transparency, responsiveness, and deep knowledge of the Central and Eastern Kentucky rental market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you own a single family home or a portfolio of commercial properties, Ken DeGrant and our management team provide personalized service that keeps your property occupied, maintained, and profitable.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                  alt="Property Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] text-white rounded-xl p-5 shadow-xl">
                <div className="font-serif text-3xl font-bold">10+</div>
                <div className="text-white/80 text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1B2D4F] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Let us manage your property.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Contact Ken DeGrant today to discuss how we can help maximize the value of your investment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8592002084"
              className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Call Ken: 859-200-2084
            </a>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1B2D4F] font-semibold px-8 py-4 rounded-xl transition-colors">
                Send a Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
