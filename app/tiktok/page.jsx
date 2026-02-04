import TikTokHero from "@/components/tiktok/TikTokHero";
import TikTokCreators from "@/components/tiktok/TikTokCreators";

export default function TikTokPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-24">
      {/* hero design */}
      <TikTokHero />
      {/* TikTok Creators & Testimonials */}
      <TikTokCreators/>
    </main>
  );
}