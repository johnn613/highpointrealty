import { useState, useMemo } from "react";
import { Search, Play } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import { videos, type Video } from "@/data/videos";

type Category = "All" | "Property Tours" | "Auction Previews" | "Market Updates" | "Tips & Advice";

const categoryColors: Record<string, string> = {
  "Property Tours": "bg-blue-100 text-blue-700",
  "Auction Previews": "bg-[#C9A84C]/20 text-[#9b7d34]",
  "Market Updates": "bg-green-100 text-green-700",
  "Tips & Advice": "bg-purple-100 text-purple-700",
};

export default function Videos() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [modal, setModal] = useState<Video | null>(null);

  const categories: Category[] = ["All", "Property Tours", "Auction Previews", "Market Updates", "Tips & Advice"];

  const filtered = useMemo(() => {
    let result = [...videos];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((v) => v.title.toLowerCase().includes(q));
    }
    if (category !== "All") {
      result = result.filter((v) => v.category === category);
    }
    return result;
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Video Library</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg">
            Watch property tours, auction previews, and market updates from our team.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white shadow-md border-b border-gray-100 sticky top-[64px] md:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search videos by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  category === cat
                    ? "bg-[#1B2D4F] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No videos match your search.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => setModal(video)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1B2D4F]/30 group-hover:bg-[#1B2D4F]/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#C9A84C] hover:bg-[#b8933e] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={22} className="text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[video.category]}`}>
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-400">{video.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-[#1B2D4F] text-base leading-tight mb-4">
                    {video.title}
                  </h3>
                  <button
                    onClick={() => setModal(video)}
                    className="w-full flex items-center justify-center gap-2 bg-[#1B2D4F] hover:bg-[#162540] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Play size={14} />
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modal && (
        <VideoModal
          youtubeId={modal.youtubeId}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
