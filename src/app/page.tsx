import styles from "./page.module.css";

import { HomeHero } from "./components/home/HomeHero/HomeHero";
import { AboutJessieSection } from "./components/home/About/AboutJessieSection";
import { KeynoteSpeakerSection } from "./components/home/KeyNoteSpeakerSection/KeyNoteSpeakerSection";
import { CorporateEventsSection } from "./components/home/CorporateEventsSection/CorporateEventsSection";
import { SmallGroupEventsSection } from "./components/home/SmallGroupEventsSection/SmallGroupEventsSection";
import { TeamBuildingSection } from "./components/home/TeamBuildingSection/TeamBuildingSection";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <AboutJessieSection />
      <KeynoteSpeakerSection />
      <CorporateEventsSection />
      <SmallGroupEventsSection />
      <TeamBuildingSection />
    </main>
  );
}