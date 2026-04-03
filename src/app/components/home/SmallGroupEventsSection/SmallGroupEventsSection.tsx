import Image from "next/image";
import styles from "./SmallGroupEventsSection.module.css";
import { SquareButton } from "../../interaction/SquareButton";

export function SmallGroupEventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src="/home/Small_Group_Events_1.jpg"
            alt="Small group outdoor event"
            fill
            className={styles.image}
            sizes="(max-width: 480px) calc(100vw - 24px), 430px"
          />
        </div>

<div className={styles.content}>
  <div className={styles.contentInner}>
    <h2 className="heading_accent">SMALL GROUP EVENTS</h2>

    <p className={`paragraph_medium_white ${styles.copy}`}>
      Family reunions, special needs groups, bachelor/ette parties,
      friend gatherings, let&apos;s create a unique and fun experience
      they will talk about for years to come!
    </p>

    <SquareButton
      href="/small_group_events"
      shape="rounded"
      className={styles.cta}
    >
      LEARN MORE
    </SquareButton>
  </div>
</div>
      </div>
    </section>
  );
}