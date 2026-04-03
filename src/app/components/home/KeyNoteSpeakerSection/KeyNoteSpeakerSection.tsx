import Image from "next/image";
import styles from "./KeyNoteSpeakerSection.module.css";
import { SquareButton } from "../../interaction/SquareButton";

export function KeynoteSpeakerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src="/home/Keynote_Speaker_1.jpg"
            alt="Jessie Krebs speaking on stage"
            fill
            className={styles.image}
            sizes="(max-width: 480px) calc(100vw - 24px), 430px"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h2 className="heading_accent">KEYNOTE SPEAKER</h2>

            <p className="paragraph_medium_white">
              Stories of grit, survival, beating the odds, educational and/or
              inspirational, we&apos;ve got you!
            </p>

            <SquareButton href="/keynote_speaker" shape="rounded">
              LEARN MORE
            </SquareButton>
          </div>
        </div>
      </div>
    </section>
  );
}