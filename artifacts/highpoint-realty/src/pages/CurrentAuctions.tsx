import { Gavel, ExternalLink } from "lucide-react";

const HIBID_URL = "https://hibid.com/company/148174/high-point-realty-and-auction";

export default function CurrentAuctions() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Page Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-12 px-4 relative overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-3">
            <Gavel size={28} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Live &amp; Upcoming
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">
                Current Auctions
              </h1>
              <p className="text-white/60 max-w-xl">
                Bid onsite or online. All auctions conducted by licensed Kentucky auctioneers.
                Powered by HiBid — register and bid directly below.
              </p>
            </div>
            <a
              href={HIBID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8933e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors self-start sm:self-auto"
            >
              <ExternalLink size={15} />
              Open in HiBid
            </a>
          </div>
        </div>
      </div>

      {/* HiBid blocks its auction catalog from loading inside another website. */}
      <main className="flex-1 px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-[#1B2D4F] px-6 py-8 sm:px-10 sm:py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                <Gavel size={30} className="text-[#C9A84C]" />
              </div>
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                High Point Realty &amp; Auction
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Find Your Next Auction
              </h2>
              <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
                See all of our live and upcoming auctions, review sale details, and register to bid through our HiBid auction catalog.
              </p>
            </div>
            <div className="px-6 py-8 sm:px-10 sm:py-9 text-center">
              <a
                href={HIBID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-semibold px-7 py-4 rounded-lg transition-colors"
              >
                <Gavel size={18} />
                Browse Live Auctions
                <ExternalLink size={16} />
              </a>
              <p className="mt-4 text-gray-500 text-sm">
                The HiBid catalog opens in a new tab, where you can view auction listings and place bids.
              </p>
              <div className="mt-7 pt-6 border-t border-gray-100">
                <p className="text-[#1B2D4F] font-semibold text-sm mb-1">Need help with an auction?</p>
                <p className="text-gray-500 text-sm">
                  Call Ken at{" "}
                  <a href="tel:8592002084" className="text-[#7D5E00] hover:underline">859-200-2084</a>
                  {" "}or Bradley at{" "}
                  <a href="tel:8595821870" className="text-[#7D5E00] hover:underline">859-582-1870</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fallback CTA */}
      <div className="bg-[#1B2D4F] px-4 py-8 text-center text-white flex-shrink-0">
        <p className="text-white/60 text-sm mb-3">
          Ready to bid? Browse all listings in our HiBid catalog:{" "}
          <a
            href={HIBID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:underline font-medium"
          >
            Open HiBid directly →
          </a>
        </p>
        <p className="text-white/40 text-xs">
          Questions? Call Ken DeGrant at{" "}
          <a href="tel:8592002084" className="text-white/60 hover:text-[#C9A84C] transition-colors">
            859-200-2084
          </a>
          {" "}or Bradley Conner at{" "}
          <a href="tel:8595821870" className="text-white/60 hover:text-[#C9A84C] transition-colors">
            859-582-1870
          </a>
        </p>
      </div>
    </div>
  );
}
