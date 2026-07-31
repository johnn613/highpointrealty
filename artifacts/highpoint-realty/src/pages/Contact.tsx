import { useState } from "react";
import { Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";
import davidPhoto from "@assets/david-photo.webp";
import kenPhoto from "@assets/team-ken.webp";
import johnPhoto from "@assets/team-john.webp";
import nancyPhoto from "@assets/team-nancy.webp";
import bradleyPhoto from "@assets/bradley-conner.webp";

const agents = [
  {
    name: "Ken DeGrant",
    title: "Broker / Owner",
    photo: kenPhoto,
    phone: "859-200-2084",
    tel: "8592002084",
    email: "kenneth.degrant@gmail.com",
    bio: "Broker/Owner of High Point Realty & Auction. Over a decade of experience in residential, commercial, and auction real estate. Currently manages 150+ properties across Central and Eastern Kentucky.",
  },
  {
    name: "David Reichley",
    title: "Realtor / Agent",
    photo: davidPhoto,
    phone: "864-590-2954",
    tel: "8645902954",
    email: "david.reichley@highpointky.com",
    bio: "Real Estate Agent and Partner at Wise Builders Group. 20+ years in ministry and community leadership. Specializes in flips, rentals, and residential transactions.",
  },
  {
    name: "Nancy Nichols",
    title: "Realtor / Agent",
    photo: nancyPhoto,
    phone: "606-371-0997",
    tel: "6063710997",
    email: null,
    bio: "Former educator turned realtor. Nancy takes a personalized, patient approach to every transaction — perfect for first-time buyers and anyone who wants a guide they can trust.",
  },
  {
    name: "John Montgomery",
    title: "Auctioneer",
    photo: johnPhoto,
    phone: "606-496-6530",
    tel: "6064966530",
    email: null,
    bio: "Licensed Kentucky auctioneer with decades of experience in onsite and online real estate auctions. Consistently delivers top dollar for sellers.",
    photoPosition: "top",
  },
  {
    name: "Bradley Conner",
    title: "Auctioneer",
    photo: bradleyPhoto,
    phone: "859-582-1870",
    tel: "8595821870",
    email: null,
    bio: "Born and raised in Madison County, Bradley brings lifelong experience in real estate, farms, construction, and heavy equipment. His hands-on background gives him a sharp eye for value and a deep understanding of the auction business. Known for his hardworking attitude, honesty, and commitment to customer service, Bradley's goal is always to make the buying and selling experience smooth and rewarding.",
  },
];

export default function Contact() {
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg">
            Tap a team member to get in touch.
          </p>
        </div>
      </div>

      {/* Agent Cards */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-4">
        {agents.map((agent) => {
          const isOpen = expandedAgent === agent.name;
          return (
            <div key={agent.name} className="bg-white rounded-2xl overflow-hidden shadow-md">
              {/* Tap row */}
              <button
                onClick={() => setExpandedAgent(isOpen ? null : agent.name)}
                className="w-full flex items-center gap-5 p-5 hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <img
                  src={agent.photo}
                  alt={agent.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A84C]/40 flex-shrink-0"
                  style={{ objectPosition: (agent as any).photoPosition ?? "center" }}
                />
                <div className="text-left flex-1 min-w-0">
                  <div className="font-serif text-xl font-bold text-[#1B2D4F]">{agent.name}</div>
                  <div className="text-[#7D5E00] text-xs font-semibold uppercase tracking-widest mt-0.5">{agent.title}</div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Expandable dropdown */}
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{agent.bio}</p>
                  <div className="flex flex-col gap-2">
                    {agent.phone && (
                      <a
                        href={`tel:${agent.tel}`}
                        className="flex items-center justify-center gap-2 bg-[#1B2D4F] text-white font-semibold py-3 rounded-xl hover:bg-[#162540] transition-colors"
                      >
                        <Phone size={16} />
                        {agent.phone}
                      </a>
                    )}
                    {agent.email && (
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center justify-center gap-2 border-2 border-[#C9A84C] text-[#9b7d34] font-semibold py-3 rounded-xl hover:bg-[#C9A84C] hover:text-white transition-colors text-sm"
                      >
                        <Mail size={16} />
                        {agent.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Info row */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-[#1B2D4F]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-[#C9A84C]" />
            </div>
            <div>
              <div className="font-semibold text-[#1B2D4F] text-sm">Service Area</div>
              <div className="text-gray-500 text-sm">Central & Eastern Kentucky</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-[#1B2D4F]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={20} className="text-[#C9A84C]" />
            </div>
            <div>
              <div className="font-semibold text-[#1B2D4F] text-sm">Business Hours</div>
              <div className="text-gray-500 text-sm">Mon–Fri 8am–6pm · Sat 9am–2pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
