import { useState, useMemo } from "react";
import { Search, DollarSign, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { pastAuctions, type PastAuction } from "@/data/pastAuctions";

export default function PastAuctions() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("All");
  const [county, setCounty] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Newest First");
  const [expanded, setExpanded] = useState<number | null>(null);

  const counties = ["All", ...Array.from(new Set(pastAuctions.map((a) => a.county))).sort()];

  const filtered = useMemo(() => {
    let result = [...pastAuctions];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((a) => a.address.toLowerCase().includes(q) || a.county.toLowerCase().includes(q));
    }
    if (year !== "All") result = result.filter((a) => a.year.toString() === year);
    if (county !== "All") result = result.filter((a) => a.county === county);
    if (type !== "All") result = result.filter((a) => a.type === type);

    if (sort === "Newest First") result.sort((a, b) => b.id - a.id);
    if (sort === "Oldest First") result.sort((a, b) => a.id - b.id);

    return result;
  }, [search, year, county, type, sort]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Past Auctions</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Browse our auction history — properties sold across Central and Eastern Kentucky.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-md sticky top-[64px] md:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1 min-w-[200px]">
            <Search size={15} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by address or county..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none"
          >
            {["All", "2026", "2025", "2024", "2023"].map((y) => (
              <option key={y}>{y === "All" ? "Year: All" : y}</option>
            ))}
          </select>

          <select
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none"
          >
            {counties.map((c) => (
              <option key={c}>{c === "All" ? "County: All" : c}</option>
            ))}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none"
          >
            {["All", "Residential", "Commercial", "Land"].map((t) => (
              <option key={t}>{t === "All" ? "Type: All" : t}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none"
          >
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>

          <span className="text-xs text-gray-500 ml-auto">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No past auctions match your search.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((auction) => (
              <div key={auction.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img src={auction.image} alt={auction.address} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      SOLD
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium text-white ${
                      auction.type === "Residential" ? "bg-blue-600" :
                      auction.type === "Commercial" ? "bg-purple-600" : "bg-green-600"
                    }`}>
                      {auction.type}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-[#1B2D4F] text-sm leading-tight mb-3 line-clamp-2">
                    {auction.address}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign size={14} className="text-green-600 flex-shrink-0" />
                    <span className="font-bold text-green-600 text-lg">${auction.soldPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <Calendar size={12} />
                    <span>{auction.soldDate}</span>
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === auction.id ? null : auction.id)}
                    className="w-full flex items-center justify-center gap-2 border border-[#1B2D4F] text-[#1B2D4F] text-xs font-semibold py-2 rounded-lg hover:bg-[#1B2D4F] hover:text-white transition-colors"
                  >
                    View Details
                    {expanded === auction.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {expanded === auction.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-xs leading-relaxed">{auction.description}</p>
                      <div className="mt-2 text-xs text-gray-400">{auction.county} County</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
