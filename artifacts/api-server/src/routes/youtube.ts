import { Router, type IRouter } from "express";

const CHANNEL_ID = "UCO9vZPhnSR6MIcFBq5gILqA";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const CACHE_TTL_MS = 10 * 60 * 1000;

interface VideoEntry {
  youtubeId: string;
  title: string;
  published: string;
  category: "Property Tours" | "Auction Previews" | "Market Updates" | "Tips & Advice";
}

let cache: { data: VideoEntry[]; fetchedAt: number } | null = null;

function categorize(title: string): VideoEntry["category"] {
  const t = title.toLowerCase();
  if (t.includes("auction")) return "Auction Previews";
  if (t.includes("adtv") || t.includes("as seen on tv") || t.includes("market update")) return "Market Updates";
  if (t.includes("commercial") || t.includes("overview") || t.includes("tip") || t.includes("how to")) return "Tips & Advice";
  return "Property Tours";
}

function decodeXmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\*+/g, "")
    .trim();
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function parseRSS(xml: string): VideoEntry[] {
  const entries: VideoEntry[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = entryRegex.exec(xml)) !== null) {
    const block = match[1];
    const videoIdMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = block.match(/<title>([^<]+)<\/title>/);
    const publishedMatch = block.match(/<published>([^<]+)<\/published>/);
    if (videoIdMatch && titleMatch && publishedMatch) {
      const title = decodeXmlEntities(titleMatch[1]);
      entries.push({
        youtubeId: videoIdMatch[1].trim(),
        title,
        published: formatDate(publishedMatch[1].trim()),
        category: categorize(title),
      });
    }
  }
  return entries;
}

const router: IRouter = Router();

router.get("/youtube-feed", async (_req, res) => {
  try {
    if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
      res.json({ videos: cache.data, cached: true });
      return;
    }
    const response = await fetch(RSS_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
    });
    if (!response.ok) {
      throw new Error(`RSS fetch returned ${response.status}`);
    }
    const xml = await response.text();
    const videos = parseRSS(xml);
    cache = { data: videos, fetchedAt: Date.now() };
    res.json({ videos, cached: false });
  } catch (_err) {
    res.status(502).json({ error: "Failed to fetch YouTube feed" });
  }
});

export default router;
