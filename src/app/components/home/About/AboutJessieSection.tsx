import Image from "next/image";
import styles from "./AboutJessieSection.module.css";
import { ContentPanel } from "../../content/ContentPanel";

export function AboutJessieSection() {
    return (
        <section className={styles.section} id="about-jessie">
            <div className={styles.inner}>
                <div className={styles.mosaicWrap}>
                    <Image
                        src="/home/Visual_mosaic_1.png"
                        alt="A visual collage of Jessie Krebs teaching, serving, and leading outdoor groups"
                        fill
                        className={styles.mosaicImage}
                        sizes="(max-width: 480px) calc(100vw - 24px), 430px"
                    />
                </div>

                <ContentPanel
                    title="ABOUT JESSIE"
                    paragraphs={[
                        <>
                            Jessie joined the U.S. Air Force to pay for college and leave her small
                            Midwest town, gaining confidence and a deep bond with the outdoors along
                            the way. She became one of the few female <strong>S.E.R.E. specialists</strong>,
                            teaching survival skills to military personnel, and later appeared on
                            season 9 of <strong>Alone</strong> as well as the Mygrations series by{" "}
                            <strong>National Geographic</strong>.
                        </>,
                        <>
                            After her service, she spent years in <strong>wilderness therapy</strong>{" "}
                            and went on to own and operate a <strong>survival training school</strong>.
                            She has been featured in <strong>The New York Times</strong>, has written
                            for <strong>Backpacker</strong>, and <strong>speaks at events</strong>{" "}
                            around the country, with a strong focus on{" "}
                            <strong>empowering women</strong> through skills and knowledge that build
                            confidence and resilience.
                        </>,
                    ]}
                />
            </div>
        </section>
    );
}