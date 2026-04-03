import Image from "next/image";
import styles from "./CorporateEventsSection.module.css";
import { SquareButton } from "../../interaction/SquareButton";

export function CorporateEventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className="heading_black">CORPORATE EVENTS</h2>

          <p className={`paragraph_medium_black`}>
            Celebrating a major win, working through a transition, looking to
            boost morale and show your team a good time? Veer away from monotony
            and give them an experience to remember.
          </p>

          <SquareButton
            href="/corporate_events"
            shape="rounded"
            className={styles.cta}
          >
            LEARN MORE
          </SquareButton>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/home/Helicopter.jpg"
            alt="Corporate group outdoors at an event"
            fill
            className={styles.image}
            sizes="(max-width: 480px) calc(100vw - 24px), 430px"
          />
        </div>
      </div>
    </section>
  );
}