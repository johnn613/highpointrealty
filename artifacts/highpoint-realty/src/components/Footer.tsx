import { Link } from "wouter";
import { Phone, Mail, Facebook, Instagram, Youtube, MapPin } from "lucide-react";
import logo from "@assets/HPLogos3_logo.webp";

export default function Footer() {
  return (
    <footer className="bg-[#1B2D4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logo}
                alt="High Point Realty & Auction"
                width={240}
                height={64}
                loading="lazy"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              "Your High Point in Real Estate & Auction" — Serving Kentucky with integrity.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="High Point Realty on Facebook" className="w-9 h-9 bg-white/10 hover:bg-[#C9A84C] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="High Point Realty on Instagram" className="w-9 h-9 bg-white/10 hover:bg-[#C9A84C] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="High Point Realty on YouTube" className="w-9 h-9 bg-white/10 hover:bg-[#C9A84C] rounded-full flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Current Listings", "/listings"],
                ["Past Auctions", "/past-auctions"],
                ["Videos", "/videos"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold text-lg mb-5">Our Team</h3>
            <div className="space-y-5">
              <div>
                <div className="font-semibold text-white text-sm">Ken DeGrant</div>
                <div className="text-white/50 text-xs mb-2">Broker/Owner</div>
                <a href="tel:8592002084" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={13} />
                  859-200-2084
                </a>
                <a href="mailto:Kenneth.DeGrant@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] text-sm transition-colors mt-1">
                  <Mail size={13} />
                  Kenneth.DeGrant@gmail.com
                </a>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">John Montgomery</div>
                <div className="text-white/50 text-xs mb-2">Auctioneer</div>
                <a href="tel:6064966530" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={13} />
                  606-496-6530
                </a>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Bradley Conner</div>
                <div className="text-white/50 text-xs mb-2">Auctioneer</div>
                <a href="tel:8595821870" className="flex items-center gap-2 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={13} />
                  859-582-1870
                </a>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-serif text-[#C9A84C] font-semibold text-lg mb-5">Service Area</h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
              <p className="text-white/60 text-sm">Central & Eastern Kentucky</p>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {["Madison", "Estill", "Rockcastle", "Jackson", "Lee", "Breathitt", "Powell", "Owsley"].map((county) => (
                <div key={county} className="text-white/50 text-xs">• {county}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 High Point Realty & Auction. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/40 hover:text-[#C9A84C] text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link href="/terms-of-service" className="text-white/40 hover:text-[#C9A84C] text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
