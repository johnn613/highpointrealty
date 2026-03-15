import { Link } from "wouter";
import { Bed, Bath, Square, Heart, Calendar } from "lucide-react";
import type { Listing } from "@/data/listings";

interface Props {
  listing: Listing;
}

const statusColors: Record<string, string> = {
  Active: "bg-green-500 text-white",
  Auction: "bg-[#C9A84C] text-white",
  "Under Contract": "bg-blue-500 text-white",
};

export default function ListingCard({ listing }: Props) {
  return (
    <Link href={`/listings/${listing.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={listing.image}
            alt={listing.address}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${statusColors[listing.status]}`}>
              {listing.status}
            </span>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          >
            <Heart size={15} className="text-gray-400 hover:text-red-500 transition-colors" />
          </button>
          {listing.dom <= 7 && (
            <div className="absolute bottom-3 right-3 bg-[#1B2D4F] text-white text-xs px-2 py-1 rounded-full">
              New
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="font-bold text-2xl text-[#1B2D4F] mb-1">
            ${listing.price.toLocaleString()}
          </div>
          <div className="text-gray-600 text-sm mb-3 truncate">
            {listing.address}, {listing.city}
          </div>

          {(listing.beds > 0 || listing.baths > 0 || listing.sqft > 0) && (
            <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-3 mb-3">
              {listing.beds > 0 && (
                <div className="flex items-center gap-1">
                  <Bed size={14} />
                  <span>{listing.beds} bd</span>
                </div>
              )}
              {listing.baths > 0 && (
                <div className="flex items-center gap-1">
                  <Bath size={14} />
                  <span>{listing.baths} ba</span>
                </div>
              )}
              {listing.sqft > 0 && (
                <div className="flex items-center gap-1">
                  <Square size={14} />
                  <span>{listing.sqft.toLocaleString()} sqft</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full capitalize">
              {listing.type}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar size={11} />
              <span>{listing.dom}d ago</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
