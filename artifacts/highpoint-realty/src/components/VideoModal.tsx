import { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  youtubeId: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ youtubeId, title, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#1B2D4F] px-4 py-3">
          <h3 className="text-white font-medium text-sm truncate pr-8">{title}</h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors absolute right-3 top-3"
          >
            <X size={20} />
          </button>
        </div>
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
