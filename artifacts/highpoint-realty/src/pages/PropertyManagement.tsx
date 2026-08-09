import { Link } from "wouter";
import { Users, CreditCard, Wrench, ClipboardCheck, FileText, BarChart, Phone, CheckCircle, Home, DollarSign, MapPin, Calendar } from "lucide-react";

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

const rentals = [
  {
    id: 1,
    address: "214 Chestnut St",
    city: "Richmond, KY 40475",
    beds: 3,
    baths: 1,
    sqft: 1200,
    rent: 950,
    available: "Available Now",
    type: "House",
    image: "https://picsum.photos/seed/rental1/600/400",
  },
  {
    id: 2,
    address: "88 Maple Ave",
    city: "Berea, KY 40403",
    beds: 2,
    baths: 1,
    sqft: 900,
    rent: 750,
    available: "Available Now",
    type: "Apartment",
    image: "https://picsum.photos/seed/rental2/600/400",
  },
  {
    id: 3,
    address: "501 Pine Creek Rd",
    city: "Irvine, KY 40336",
    beds: 3,
    baths: 2,
    sqft: 1450,
    rent: 1100,
    available: "Available May 1",
    type: "House",
    image: "https://picsum.photos/seed/rental3/600/400",
  },
  {
    id: 4,
    address: "12 Industrial Blvd",
    city: "Mt Vernon, KY 40456",
    beds: 0,
    baths: 1,
    sqft: 2400,
    rent: 1800,
    available: "Available Now",
    type: "Commercial",
    image: "https://picsum.photos/seed/rental4/600/400",
  },
  {
    id: 5,
    address: "330 College St",
    city: "Berea, KY 40403",
    beds: 2,
    baths: 1,
    sqft: 850,
    rent: 700,
    available: "Available Now",
    type: "Apartment",
    image: "https://picsum.photos/seed/rental5/600/400",
  },
  {
    id: 6,
    address: "776 Furnace Fork Rd",
    city: "Stanton, KY 40380",
    beds: 4,
    baths: 2,
    sqft: 1800,
    rent: 1250,
    available: "Available June 1",
    type: "House",
    image: "https://picsum.photos/seed/rental6/600/400",
  },
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

      {/* Properties For Rent */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Properties For Rent</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Currently managed rental properties available across Central & Eastern Kentucky.
              Contact Ken to schedule a showing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentals.map((r) => (
              <div key={r.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <img src={r.image} alt={r.address} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${r.available === "Available Now" ? "bg-green-500 text-white" : "bg-[#C9A84C] text-white"}`}>
                      {r.available}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-[#1B2D4F] text-xs font-semibold px-2 py-1 rounded-full">
                    {r.type}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-2xl text-[#1B2D4F]">${r.rent.toLocaleString()}<span className="text-sm font-normal text-gray-400">/mo</span></span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <MapPin size={12} />
                    <span className="truncate">{r.address}, {r.city}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-3">
                    {r.beds > 0 && <span className="flex items-center gap-1"><Home size={13} />{r.beds} bd</span>}
                    {r.baths > 0 && <span>{r.baths} ba</span>}
                    {r.sqft > 0 && <span>{r.sqft.toLocaleString()} sqft</span>}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="tel:8592002084"
                    className="w-full flex items-center justify-center gap-2 bg-[#1B2D4F] hover:bg-[#162540] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Phone size={14} />
                    Schedule a Showing
                  </a>
                </div>
              </div>
            ))}
          </div>
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
                Whether you own a single family home or a portfolio of commercial properties, Ken DeGrant, Bradley Conner, and our management team provide personalized service that keeps your property occupied, maintained, and profitable.
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
                  src="https://picsum.photos/seed/mgmt-hero/800/800"
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
            Contact Ken DeGrant or Bradley Conner today to discuss how we can help maximize the value of your investment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8592002084"
              className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Call Ken: 859-200-2084
            </a>
            <a
              href="tel:8595821870"
              className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Call Bradley: 859-582-1870
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
