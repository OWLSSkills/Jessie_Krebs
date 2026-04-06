import Image from "next/image";
import styles from "./HomeHero.module.css";
import { AsSeenBanner } from "./AsSeenBanner/AsSeenBanner";
import { SquareButton } from "../../interaction/SquareButton";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.leftCopyInner}>
              <h2 className={styles.leftHeadline}>
                <span>LOVED JESSIE KREBS</span>

                <span className={styles.masterclassRow}>
                  <Image
                    src="/home/MasterClass-logo.png"
                    alt="MasterClass"
                    width={220}
                    height={44}
                    className={styles.masterclassLogo}
                  />
                </span>

                <span>ON WILDERNESS SURVIVAL?</span>
              </h2>

              <p className={styles.leftSupporting}>
                Bring the experience to you!
              </p>

              <SquareButton href="/contact">
                PLAN YOUR EVENT WITH JESSIE
              </SquareButton>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageWrap}>
              <Image
                src="/home/Jessie_With_Rope.png"
                alt="Jessie Krebs holding a rope"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 768px) 78vw, (max-width: 1200px) 420px, 620px"
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.rightCopyCard}>
              <h2 className={styles.rightHeadline}>YOUR CUSTOM COURSE!</h2>

              <p className="paragraph_small_black">
                These are designed around YOUR goals and are tailored to fit
                perfectly. For your family, coworkers, bachelorette party,
                friends, folks with special needs, expedition or thru-hike prep,
                to name a few!
              </p>

              <p className="paragraph_small_black">
                They may be a few hours or weeks in length, involving just the
                people you want, at a time and location of your choosing, or
                even be completely online!
              </p>

              <p className="paragraph_small_black">
                We can work together to choose the topics you are most
                interested in exploring and the atmosphere you want to create.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bannerDock}>
        <AsSeenBanner />
      </div>
    </section>
  );
}