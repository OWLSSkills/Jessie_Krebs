import styles from "./AsSeenBanner.module.css";

export function AsSeenBanner() {
  return (
    <div className={styles.as_seen_animation_banner}>
      <h2 className={styles.banner_title}>As seen, read, and heard on:</h2>

      <div className={styles.animation_banner_wrapper}>
        <div className={styles.animation_banner_track}>
          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/masterclass-logo_white.png"
              alt="Masterclass Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/alone-s9-logo-black.png"
              alt="Alone Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/Backpacker.png"
              alt="Backpacker Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/National_Geographic.png"
              alt="National Geographic Logo"
              className={`${styles.animation_banner_image} ${styles.scale_up_logo}`}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/masterclass-logo_white.png"
              alt="Masterclass Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/alone-s9-logo-black.png"
              alt="Alone Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/Backpacker.png"
              alt="Backpacker Logo"
              className={styles.animation_banner_image}
            />
          </div>

          <div className={styles.logo_container}>
            <img
              src="/Animation_Banner/National_Geographic.png"
              alt="National Geographic Logo"
              className={`${styles.animation_banner_image} ${styles.scale_up_logo}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}