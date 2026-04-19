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
                            Welcome! I’m Jessie, born and raised in Michigan, I joined the U.S. Air Force to see more of the world and pay for college.
                            Experiencing abuse and neglect in childhood, escaping outside was a large factor in my survival,
                            so I became one of few female S.E.R.E. Specialists, teaching global survival, evasion, resistance, and escape skills to military personnel.
                            This later led to media opportunities like “ALONE” S9, “Mygrations” with National Geographic, and a class on 
                            <a style={{ color: "white" }} href="http://MasterClass.com">“MasterClass.com”</a>.
                        </>,
                        <>
                            In between I worked as an outdoor recreation guide, ropes/challenge course facilitator, high school teacher, and spent a decade as
                            a wilderness therapy field guide (finally getting some much needed therapy of my own!).  I’ve built a raft and pushed off the north
                            shore of Kauai, chased off many black bears, kayaked and hiked in beautiful locations around the world, had conversations with spiders,
                            and managed to get a BA in Educational Psychology.  Life has been a rollercoaster so far and I’m pretty grateful for that.  I’ve managed
                            to get featured in “The New York Times”, have a column in “Backpacker”, and chat with many podcasters.
                        </>,
                        <>
                            I currently own and operate a women’s survival school and create custom courses for everyone, which is what JessieKrebs.com is all about!
                            That work takes me all over the country and occasionally the world; in my “off time" I work on building a house, traveling, volunteering,
                            and always learning.
                        </>,
                    ]}
                />
            </div>
        </section>
    );
}