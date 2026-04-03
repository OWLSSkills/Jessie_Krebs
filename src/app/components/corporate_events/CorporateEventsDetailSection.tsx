import Image from "next/image";
import styles from "./CorporateEventsDetailSection.module.css";
import { SquareButton } from "../interaction/SquareButton";

export function CorporateEventsDetailSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h1 className={`heading_black ${styles.title}`}>CORPORATE EVENTS</h1>

            <p className={`paragraph_medium_black ${styles.lead}`}>
              From startup to conglomerate, if your people need to blow off
              steam, celebrate a major win, bond and connect in meaningful
              ways, improve office culture and morale, or just enjoy each
              other&apos;s company in a fun and unique way, you&apos;re in the
              right place!
            </p>
          </div>

          <div className={styles.mosaicWrap}>
            <Image
              src="/corporate_events/Logo_companies.png"
              alt="Corporate event logo mosaic"
              fill
              sizes="(max-width: 980px) 100vw, 520px"
              className={styles.mosaicImage}
            />
          </div>
        </div>

        <div className={styles.bodyCopy}>
          <p className="paragraph_small_black">
            Survival competition scenario: break into teams after learning some
            survival concepts and then put that new knowledge to the test!
            Signaling, building shelter and fire, caring for an “injured”
            coworker, navigating an orienteering course; we’ll give you lots of
            fodder for fun and solid metaphors that transfer back to the office.
          </p>

          <p className="paragraph_small_black">
            Survival education and demos: Does your company have a high
            potential for needing real survival skills? Then let&apos;s dive
            into the nitty gritty of what survival actually entails with stories
            and examples of what to do and NOT to do in a real situation.
          </p>

          <p className="paragraph_small_black">
            Themed games and activities: Let&apos;s zero in on your goal for
            your team and design a series of games and activities that center
            around it. There are hundreds of games that we can choose from that
            can be done inside or out using a plethora of different storylines.
            Looking to give your team a seriously good time? Let&apos;s do it!
          </p>

          <p className="paragraph_small_black">
            Reasonable prices for an unbelievably good time!
          </p>
        </div>

        <div className={styles.ctaRow}>
          <SquareButton href="/contact" shape="rounded">
            CREATE YOUR EVENT
          </SquareButton>
        </div>
      </div>
    </section>
  );
}