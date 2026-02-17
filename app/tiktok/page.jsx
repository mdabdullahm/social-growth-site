import TikTokHero from "@/components/tiktok/TikTokHero";
import TikTokCreators from "@/components/tiktok/TikTokCreators";
import TikTokLogos from "@/components/tiktok/TikTokLogos";
import TikTokFeatures from "@/components/tiktok/TikTokFeatures";

export default function TikTokPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-24">
      {/* hero design 1 */}
      <TikTokHero />
      {/* TikTok Creators & Testimonials 2 */}
      <TikTokCreators/>
      {/* Trusted Logos 3 */}
      <TikTokLogos/>
      {/* Top Tier TikTok Followers section 4 */}
      <TikTokFeatures/>
    </main>
  );
}