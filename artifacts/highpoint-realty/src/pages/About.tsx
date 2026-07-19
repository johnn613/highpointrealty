import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Handshake, Gavel, Home, ChevronDown } from "lucide-react";
import davidPhoto from "@assets/david-photo.webp";
import kenPhoto from "@assets/team-ken.webp";
import johnPhoto from "@assets/team-john.webp";
import nancyPhoto from "@assets/team-nancy.webp";

const whyChoose = [
  {
    icon: <MapPin size={24} className="text-[#C9A84C]" />,
    title: "Local Expertise",
    desc: "Deep knowledge of Central and Eastern Kentucky markets, communities, and property values.",
  },
  {
    icon: <Gavel size={24} className="text-[#C9A84C]" />,
    title: "Auction Specialists",
    desc: "Decades of professional auction experience delivering maximum value for sellers.",
  },
  {
    icon: <Home size={24} className="text-[#C9A84C]" />,
    title: "Full-Service Realty",
    desc: "From residential homes to commercial properties — we handle every aspect of your transaction.",
  },
  {
    icon: <Handshake size={24} className="text-[#C9A84C]" />,
    title: "Honest & Transparent",
    desc: "Straightforward communication and transparent processes that put your interests first.",
  },
];

const team = [
  {
    name: "Ken DeGrant",
    title: "Broker / Owner",
    photo: kenPhoto,
    phone: "859-200-2084",
    tel: "8592002084",
    email: "kenneth.degrant@gmail.com",
    bio: "Ken is the Broker and Owner of High Point Realty & Auction, based in Richmond, KY. He has been in the real estate industry for more than 8 years and currently manages over 150 properties. In addition to residential and commercial transactions, Ken is a licensed auctioneer — offering charity benefit auctions, estate sales, and real estate auctions to best serve his clients and give back to the community.\n\nKen is driven by his family and fueled by the satisfaction of helping every client he can.",
  },
  {
    name: "David Reichley",
    title: "Realtor / Agent",
    photo: davidPhoto,
    phone: "864-590-2954",
    tel: "8645902954",
    email: "david.reichley@highpointky.com",
    bio: "David brings a Business Management degree from Palm Beach Atlantic University and 20+ years of experience in ministry and pastoral work. He recently obtained his Real Estate License and is also a Partner at Wise Builders Group, LLC, where he focuses on flips, renovations, rentals, and property investment.\n\nCommunity and teamwork have always defined David's life — from sports teams and community groups to growing up in a family of 7 kids. He channels that energy into every client relationship. His best work, he'll tell you, is his 25-year marriage to Courtney and their 4 kids.",
  },
  {
    name: "Nancy Nichols",
    title: "Realtor / Agent",
    photo: nancyPhoto,
    phone: "606-371-0997",
    tel: "6063710997",
    email: null,
    bio: "Nancy brings a unique perspective to real estate, having transitioned from a career in education. As a former teacher, she understands that no two clients — like no two students — are the same.\n\nShe takes a personalized approach to every transaction, whether you're a first-time buyer, a growing family, or an empty-nester. Her commitment is to make your journey to homeownership as smooth and enjoyable as possible.",
  },
  {
    name: "John Montgomery",
    title: "Auctioneer",
    photo: johnPhoto,
    phone: "606-496-6530",
    tel: "6064966530",
    email: null,
    bio: "John brings decades of auction experience across Kentucky, running onsite and online auctions with professionalism and results. As a licensed Kentucky auctioneer, John has conducted hundreds of real estate auctions — from farm tracts and residential homes to commercial buildings and development land.\n\nHis expertise in auction marketing and bidder engagement consistently delivers top dollar for sellers.",
    photoPosition: "top",
  },
];

export default function About() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">About High Point Realty & Auction</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-6">Our Story</h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            High Point Realty & Auction was founded with a single mission: to be Kentucky's most trusted real estate and auction team. Serving Central and Eastern Kentucky, we combine traditional real estate expertise with professional auction services to help clients buy and sell properties efficiently and at maximum value.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our team brings together decades of combined experience in real estate brokerage and professional auctioneering. From rural farmland and hunting properties to residential homes and commercial buildings, we've helped hundreds of Kentucky families and investors reach their real estate goals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            At High Point, we believe every client deserves honest advice, transparent processes, and results they can count on. That's the High Point difference.
          </p>
        </div>
      </div>

      {/* Team Bios */}
      <div className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Meet the Team</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((agent) => {
              const isOpen = expanded === agent.name;
              return (
                <div key={agent.name} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  {/* Photo + Header — always visible, clickable */}
                  <button
                    className="w-full text-left bg-[#1B2D4F] p-8 flex flex-col items-center focus:outline-none"
                    onClick={() => setExpanded(isOpen ? null : agent.name)}
                  >
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-[#C9A84C]/50 shadow-lg mb-4">
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        width={112}
                        height={112}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: agent.photoPosition ?? "center" }}
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1 text-center">{agent.name}</h3>
                    <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest text-center mb-3">{agent.title}</p>
                    <ChevronDown
                      size={18}
                      className={`text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expandable Bio + Contact */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-6">
                      {agent.bio.split("\n\n").map((para, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                      ))}
                      <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-gray-100">
                        <a
                          href={`tel:${agent.tel}`}
                          className="flex items-center justify-center gap-2 bg-[#1B2D4F] text-white font-semibold py-2.5 rounded-lg hover:bg-[#162540] transition-colors text-sm"
                        >
                          <Phone size={14} />
                          {agent.phone}
                        </a>
                        {agent.email && (
                          <a
                            href={`mailto:${agent.email}`}
                            className="flex items-center justify-center gap-2 border border-[#C9A84C] text-[#9b7d34] font-semibold py-2.5 rounded-lg hover:bg-[#C9A84C] hover:text-white transition-colors text-xs"
                          >
                            <Mail size={13} />
                            {agent.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Why Choose High Point?</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 bg-[#1B2D4F] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:bg-[#C9A84C] transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B2D4F] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1B2D4F] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/60 mb-8">Contact us today and let's talk about how we can help you.</p>
          <Link href="/contact">
            <button className="bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
