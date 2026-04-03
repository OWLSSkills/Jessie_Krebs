import Image from "next/image";
import styles from "./TeamBuildingSection.module.css";
import { SquareButton } from "../../interaction/SquareButton";

export function TeamBuildingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h2 className={`heading_black ${styles.heading}`}>TEAM BUILDING</h2>

            <p className={`paragraph_medium_black ${styles.copy}`}>
              communication, leadership (and follower) training, employee
              bonding, conflict resolution, and so much more!
            </p>

            <SquareButton
              href="/team_building"
              shape="rounded"
              className={styles.cta}
            >
              LEARN MORE
            </SquareButton>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/home/Team_Building_1.jpg"
            alt="Team building group outdoors in the snow"
            fill
            className={styles.image}
            sizes="(max-width: 480px) calc(100vw - 24px), 430px"
          />
        </div>
      </div>
    </section>
  );
}