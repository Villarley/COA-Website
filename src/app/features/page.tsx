import FeaturesCompanions from "@/components/features/features-companions";
import FeaturesFactions from "@/components/features/features-factions";
import FeaturesResurrection from "@/components/features/features-resurrection";
import FeaturesHero from "@/components/features/features-hero";
import FeaturesCustomization from "@/components/features/features-customization";
import FeaturesArsenal from "@/components/features/features-arsenal";
import FeaturesWorldExploration from "@/components/features/features-world-exploration";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#0e1a2b] text-white">
      <FeaturesHero />
      <DigitalRainEffect />
      <div className="container mx-auto px-4">
        <FeaturesFactions />
        <FeaturesResurrection />
        <FeaturesCompanions />
        <FeaturesCustomization />
        <FeaturesArsenal />
        <FeaturesWorldExploration />
      </div>
    </main>
  );
}

