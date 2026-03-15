import { Link, useParams } from "wouter";
import { ArrowLeft, Bed, Bath, Square, Phone, Mail, Calendar, Gavel, MapPin, Share2, Heart } from "lucide-react";
import { listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";

export default function ListingDetail() {
  const params = useParams<{ id: string }>();
  const id = parseInt(params.id);
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[#1B2D4F] mb-4">Listing Not Found</h1>
          <Link href="/listings">
            <button className="bg-[#C9A84C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8933e] transition-colors">
              Back to Listings
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = listings.filter((l) => l.id !== listing.id && l.type === listing.type).slice(0, 3);
  const isAuction = listing.status === "Auction";

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={listing.image} alt={listing.address} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {/* Back button */}
        <div className="absolute top-24 left-4 sm:left-8">
          <Link href="/listings">
            <button className="flex items-center gap-2 bg-white/90 hover:bg-white text-[#1B2D4F] px-4 py-2 rounded-lg font-medium text-sm shadow-md transition-colors">
              <ArrowLeft size={16} />
              Back to Listings
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 ${
                    listing.status === "Active" ? "bg-green-100 text-green-700" :
                    listing.status === "Auction" ? "bg-[#C9A84C]/20 text-[#C9A84C]" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {listing.status}
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-[#1B2D4F]">{listing.address}</h1>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <MapPin size={15} />
                    <span className="text-sm">{listing.city} · {listing.county} County</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-4xl text-[#1B2D4F]">${listing.price.toLocaleString()}</div>
                  {listing.sqft > 0 && (
                    <div className="text-gray-500 text-sm">${Math.round(listing.price / listing.sqft)}/sqft</div>
                  )}
                </div>
              </div>

              {/* Key Stats */}
              {(listing.beds > 0 || listing.baths > 0 || listing.sqft > 0 || listing.lotSize) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100 pt-4">
                  {listing.beds > 0 && (
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <Bed size={20} className="text-[#C9A84C]" />
                      <div>
                        <div className="font-bold text-[#1B2D4F]">{listing.beds}</div>
                        <div className="text-xs text-gray-500">Bedrooms</div>
                      </div>
                    </div>
                  )}
                  {listing.baths > 0 && (
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <Bath size={20} className="text-[#C9A84C]" />
                      <div>
                        <div className="font-bold text-[#1B2D4F]">{listing.baths}</div>
                        <div className="text-xs text-gray-500">Bathrooms</div>
                      </div>
                    </div>
                  )}
                  {listing.sqft > 0 && (
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <Square size={20} className="text-[#C9A84C]" />
                      <div>
                        <div className="font-bold text-[#1B2D4F]">{listing.sqft.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Sq Ft</div>
                      </div>
                    </div>
                  )}
                  {listing.lotSize && (
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <MapPin size={20} className="text-[#C9A84C]" />
                      <div>
                        <div className="font-bold text-[#1B2D4F]">{listing.lotSize}</div>
                        <div className="text-xs text-gray-500">Lot Size</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="font-serif text-xl font-bold text-[#1B2D4F] mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm">{listing.type}</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm">{listing.county} County</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm">{listing.dom} days on market</span>
              </div>
            </div>

            {/* Auction Info */}
            {isAuction && listing.auctionDate && (
              <div className="bg-[#1B2D4F] rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Gavel size={24} className="text-[#C9A84C]" />
                  <h2 className="font-serif text-xl font-bold">Auction Information</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Auction Date</div>
                    <div className="font-bold text-lg">{listing.auctionDate}</div>
                  </div>
                  {listing.auctionTime && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Auction Time</div>
                      <div className="font-bold text-lg">{listing.auctionTime}</div>
                    </div>
                  )}
                </div>
                <div className="mt-4 bg-[#C9A84C]/20 border border-[#C9A84C]/30 rounded-lg p-4">
                  <div className="font-semibold text-[#C9A84C] mb-1">📡 Onsite & Online Bidding Available</div>
                  <p className="text-white/70 text-sm">Register to bid online or attend in person. Contact Ken DeGrant for details.</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Contact Sidebar */}
          <div className="space-y-5">
            {/* Agent Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-[100px]">
              <h3 className="font-serif text-lg font-bold text-[#1B2D4F] mb-4">Listed by</h3>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://via.placeholder.com/100x100?text=KD"
                  alt="Ken DeGrant"
                  className="w-16 h-16 rounded-full border-2 border-[#C9A84C]/30"
                />
                <div>
                  <div className="font-bold text-[#1B2D4F]">Ken DeGrant</div>
                  <div className="text-[#C9A84C] text-sm">Broker/Owner</div>
                  <a href="tel:8592002084" className="text-gray-500 text-sm hover:text-[#C9A84C] transition-colors">
                    859-200-2084
                  </a>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <a
                  href="tel:8592002084"
                  className="w-full flex items-center justify-center gap-2 bg-[#1B2D4F] text-white font-semibold py-3 rounded-lg hover:bg-[#162540] transition-colors"
                >
                  <Phone size={16} />
                  Call: 859-200-2084
                </a>
                <a
                  href={`mailto:ken@highpointky.com?subject=Inquiry: ${listing.address}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#C9A84C] text-[#C9A84C] font-semibold py-3 rounded-lg hover:bg-[#C9A84C] hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  Schedule Showing
                </a>
              </div>

              {/* Contact Form */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="font-semibold text-[#1B2D4F] text-sm mb-4">Send a Message</h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                  />
                  <textarea
                    rows={3}
                    placeholder={`I'm interested in ${listing.address}...`}
                    defaultValue={`I'm interested in ${listing.address}...`}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#C9A84C] hover:bg-[#b8933e] text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Share */}
              <div className="border-t border-gray-100 mt-5 pt-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Share2 size={14} />
                  <span>Share this listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-3xl font-bold text-[#1B2D4F] mb-8">Similar Properties</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
