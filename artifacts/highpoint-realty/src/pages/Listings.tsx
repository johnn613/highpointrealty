import { Link } from "wouter";
import { Gavel, Home } from "lucide-react";

export default function Listings() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Page Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Current Listings</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg">
            Find your next property across Central &amp; Eastern Kentucky
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
          <div className="w-20 h-20 bg-[#1B2D4F]/8 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home size={36} className="text-[#1B2D4F]/50" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1B2D4F] mb-3">Coming Soon</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Our listings are being updated. Check back soon — or reach out to our team directly
            to ask about available properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact">
              <div className="inline-flex items-center gap-2 bg-[#1B2D4F] hover:bg-[#162540] text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer text-sm">
                Contact Our Team
              </div>
            </Link>
            <Link href="/current-auctions">
              <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 hover:bg-[#C9A84C]/25 border border-[#C9A84C]/40 text-[#9b7d34] font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer text-sm">
                <Gavel size={15} />
                View Current Auctions
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
