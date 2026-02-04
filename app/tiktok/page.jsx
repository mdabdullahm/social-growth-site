import TikTokHero from "@/components/tiktok/TikTokHero";
import TikTokBackground from "@/components/tiktok/TikTokBackground";

export default function TikTokPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-24">
      <TikTokBackground />
      <TikTokHero />
    </main>
  );
}