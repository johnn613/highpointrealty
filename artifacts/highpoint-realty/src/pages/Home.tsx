import { useState, useRef } from "react";
import { Link } from "wouter";
import { Search, Home as HomeIcon, Gavel, Key, Phone, Play, MapPin, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import VideoModal from "@/components/VideoModal";
import { listings } from "@/data/listings";
import { videos } from "@/data/videos";

const counties = [
  { name: "Madison", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600" },
  { name: "Estill", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600" },
  { name: "Rockcastle", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600" },
  { name: "Jackson", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600" },
  { name: "Lee", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { name: "Breathitt", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
];

const upcomingAuctions = listings.filter((l) => l.status === "Auction").slice(0, 2);
const featuredListings = listings.slice(0, 3);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoModal, setVideoModal] = useState<{ youtubeId: string; title: string } | null>(null);
  const teaserVideo = videos[0];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* YouTube background video */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/v1ZDDpicXp8?autoplay=1&mute=1&loop=1&playlist=v1ZDDpicXp8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&start=5"
            title="High Point Realty Background"
            allow="autoplay; encrypted-media"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
            style={{ border: "none" }}
          />
        </div>
        {/* Fallback image while video loads */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920')" }}
        />
        <div className="absolute inset-0 bg-[#1B2D4F]/65" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full text-[#C9A84C] text-sm font-medium uppercase tracking-widest">
            Kentucky's Premier Realty & Auction
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
            High Point Realty<br /><span className="text-[#C9A84C]">& Auction</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Serving Kentucky with integrity — real estate sales and auctions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/listings">
              <button className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b8933e] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 justify-center">
                View Current Listings
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/listings?filter=Auction">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#1B2D4F] font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 justify-center">
                Upcoming Auctions
                <Gavel size={18} />
              </button>
            </Link>
          </div>
        </div>
        {/* Quick Search */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by county, city, or address..."
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none text-sm"
            />
            <Link href={`/listings?q=${searchQuery}`}>
              <button className="bg-[#C9A84C] hover:bg-[#b8933e] text-white px-6 py-3 rounded-xl transition-colors flex items-center gap-2 font-semibold text-sm">
                <Search size={16} />
                Search
              </button>
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HomeIcon className="w-8 h-8 text-[#C9A84C]" />,
                title: "Real Estate Sales",
                desc: "Expert representation for buyers and sellers across Central and Eastern Kentucky. From residential homes to commercial properties.",
                href: "/listings",
              },
              {
                icon: <Gavel className="w-8 h-8 text-[#C9A84C]" />,
                title: "Auction Services",
                desc: "Professional onsite and online auctions that maximize your property's value. John Montgomery brings decades of Kentucky auction experience.",
                href: "/listings?filter=Auction",
              },
            ].map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="bg-[#F5F5F5] rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-[#1B2D4F] transition-colors">
                    <span className="group-hover:[&>*]:text-[#C9A84C] transition-colors">{service.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B2D4F] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1 text-[#C9A84C] text-sm font-semibold">
                    Learn More <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Featured Listings</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/listings">
              <button className="bg-[#1B2D4F] hover:bg-[#162540] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 mx-auto">
                View All Listings <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Auctions */}
      <section className="py-20 bg-[#1B2D4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Upcoming Auctions</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
            <p className="text-white/60 max-w-xl mx-auto">Don't miss these upcoming auction events — register to bid online or attend in person.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingAuctions.map((auction) => (
              <div key={auction.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <img src={auction.image} alt={auction.address} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A84C] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      Onsite & Online Bidding
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-white font-bold mb-2">{auction.address}</h3>
                  <p className="text-white/60 text-sm mb-4">{auction.city}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#C9A84C] text-sm font-semibold">📅 {auction.auctionDate}</span>
                    {auction.auctionTime && <span className="text-white/50 text-sm">at {auction.auctionTime}</span>}
                  </div>
                  <p className="text-white/70 text-sm mb-5 leading-relaxed">{auction.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A84C] font-bold text-xl">${auction.price.toLocaleString()}</span>
                    <Link href={`/listings/${auction.id}`}>
                      <button className="bg-[#C9A84C] hover:bg-[#b8933e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Meet the Team</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Ken DeGrant",
                title: "Broker/Owner",
                phone: "859-200-2084",
                tel: "8592002084",
                bio: "Ken has been serving Kentucky buyers and sellers for over a decade, specializing in residential, commercial, and auction real estate. His deep knowledge of Central and Eastern Kentucky markets ensures clients get the best results.",
              },
              {
                name: "John Montgomery",
                title: "Auctioneer",
                phone: "606-496-6530",
                tel: "6064966530",
                bio: "John brings decades of auction experience across Kentucky, running onsite and online auctions with professionalism and results. His expertise in auction marketing consistently delivers top dollar for sellers.",
              },
            ].map((agent) => (
              <div key={agent.name} className="bg-[#F5F5F5] rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 shadow-lg border-4 border-[#C9A84C]/30">
                  <img
                    src={`https://via.placeholder.com/300x300?text=${encodeURIComponent(agent.name.split(" ").map(n => n[0]).join(""))}`}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1B2D4F] mb-1">{agent.name}</h3>
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">{agent.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{agent.bio}</p>
                <a
                  href={`tel:${agent.tel}`}
                  className="inline-flex items-center gap-2 bg-[#1B2D4F] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#162540] transition-colors"
                >
                  <Phone size={16} />
                  {agent.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Teaser */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Watch Our Latest Listings on YouTube</h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-10" />
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setVideoModal({ youtubeId: teaserVideo.youtubeId, title: teaserVideo.title })}
          >
            <img
              src={`https://img.youtube.com/vi/${teaserVideo.youtubeId}/maxresdefault.jpg`}
              alt={teaserVideo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#1B2D4F]/40 group-hover:bg-[#1B2D4F]/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#C9A84C] hover:bg-[#b8933e] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} className="text-white ml-1" />
              </div>
            </div>
          </div>
          <Link href="/videos">
            <button className="mt-8 bg-[#1B2D4F] hover:bg-[#162540] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 mx-auto">
              View Full Video Library <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1B2D4F] mb-4">Areas We Serve</h2>
            <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
            <p className="text-gray-500">Proudly serving these Kentucky counties and surrounding areas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link key={county.name} href={`/listings?q=${county.name}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow">
                  <img src={county.image} alt={county.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1B2D4F]/40 group-hover:bg-[#1B2D4F]/60 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-serif text-white text-xl font-bold">{county.name}</h3>
                      <p className="text-[#C9A84C] text-xs uppercase tracking-widest mt-1">County</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#1B2D4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Buy, Sell, or Auction?<br />
            <span className="text-[#C9A84C]">Let's Talk.</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Our team is ready to help you find your dream property or get maximum value for what you're selling.
          </p>
          <Link href="/contact">
            <button className="bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>

      {videoModal && (
        <VideoModal
          youtubeId={videoModal.youtubeId}
          title={videoModal.title}
          onClose={() => setVideoModal(null)}
        />
      )}
    </div>
  );
}
