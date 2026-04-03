import Image from "next/image";
import styles from "./Contact.module.css";

export function ContactHero() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.copyBlock}>
                    <h1 className={styles.title}>
                        <span>FEEL SECURE IN THE OUTDOORS</span>
                        <span>TAKE A COURSE, SAVE A LIFE.</span>
                    </h1>
                </div>

                <div className={styles.mosaicWrap}>
                    <Image
                        src="/contact/Visualmosaic_5.png"
                        alt="Outdoor training and survival course mosaic"
                        fill
                        className={styles.mosaicImage}
                        priority
                        sizes="(max-width: 480px) calc(100vw - 24px), 430px"

                    />
                </div>
            </div>
        </section>
    );
}