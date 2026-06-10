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

      {/* HiBid Embed — header clipped via overflow-hidden + negative margin */}
      <div className="flex-1 w-full" style={{ overflow: "hidden" }}>
        <iframe
          src={HIBID_URL}
          title="High Point Realty & Auction — HiBid"
          className="w-full border-0"
          style={{
            marginTop: "-260px",
            height: "calc(100vh + 260px)",
            minHeight: "1400px",
          }}
          allow="payment"
          loading="lazy"
        />
      </div>

      {/* Fallback CTA */}
      <div className="bg-[#1B2D4F] px-4 py-8 text-center text-white flex-shrink-0">
        <p className="text-white/60 text-sm mb-3">
          Having trouble viewing auctions?{" "}
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
        </p>
      </div>
    </div>
  );
}
