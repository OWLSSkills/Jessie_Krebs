// import Image from "next/image";
// import styles from "./keynoteSpeakerDetailSection.module.css"
import { SquareButton } from "../interaction/SquareButton";

// export function KeynoteSpeakerDetailSection() {
//     return (
//         <section className={styles.section}>
//             <div className={styles.inner}>
//                 <div className={styles.topRow}>
//                     <div className={styles.intro}>
//                         <h1 className={`heading_black ${styles.title}`}>KEYNOTE SPEAKER</h1>

//                         <p className={`paragraph_medium_black ${styles.lead}`}>
//                             Looking to inspire your team to dig deep and find their personal
//                             power? Turn wounds into wisdom, persevere against the odds,
//                             discover your passion, learn by leaping into the fray, let your
//                             voice ring loud and clear. We are a force to be reckoned with,
//                             ready to drive forward with purpose and compassion.
//                         </p>
//                     </div>

//                     <div className={styles.mosaicWrap}>
//                         <Image
//                             src="/keynote_speaker/Visualmosaic_3.png"
//                             alt="Jessie Krebs keynote speaking visual mosaic"
//                             fill
//                             sizes="(max-width: 980px) 100vw, 520px"
//                             className={styles.mosaicImage}
//                         />
//                     </div>
//                 </div>

//                 <p className={`paragraph_small_black ${styles.secondaryLead}`}>
//                     Intensity, Credibility, and Enthusiasm.
//                     <br />
//                     This is what “ICE” means to instructors at the Air Force SERE
//                     school and it’s what makes SERE Specialists some of the best in the world.
//                 </p>

//                 <div className={styles.bodyCopy}>
//                     <p className="paragraph_small_black">
//                         Spiritual, emotional, mental, and physical: on each of these levels
//                         we have stories of people with faith and perseverance accomplishing
//                         incredible feats, sending ripples of hope into the world. We can all
//                         use a reminder of our own unique power and potential. There will
//                         never be another YOU again, so make the most of this journey by
//                         weaving your own story of inspiration and beauty!
//                     </p>

//                     <p className="paragraph_small_black">

//                     </p>

//                     <p className="paragraph_small_black">

//                     </p>

//                     <p className="paragraph_small_black">

//                     </p>
//                 </div>

//                 <div className={styles.ctaRow}>
//                     <SquareButton href="/contact" shape="rounded">
//                         CONTACT ME
//                     </SquareButton>
//                 </div>
//             </div>
//         </section>
//     );
// }
import Image from "next/image";
import styles from "./keynoteSpeakerDetailSection.module.css";

export function KeynoteSpeakerDetailSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.contentFlow}>
                    <div className={styles.mosaicWrap}>
                        <Image
                            src="/keynote_speaker/Visualmosaic_3.png"
                            alt="Jessie Krebs keynote speaking visual mosaic"
                            fill
                            sizes="(max-width: 980px) 100vw, 520px"
                            className={styles.mosaicImage}
                        />
                    </div>

                    <h1 className={`heading_black ${styles.title}`}>KEYNOTE SPEAKER</h1>

                    <p className={`paragraph_medium_black ${styles.lead}`}>
                        Looking to inspire your team to dig deep and find their personal
                        power? Turn wounds into wisdom, persevere against the odds,
                        discover your passion, learn by leaping into the fray, let your
                        voice ring loud and clear. We are a force to be reckoned with,
                        ready to drive forward with purpose and compassion.
                    </p>
                    <p className={`paragraph_small_black ${styles.secondaryLead}`}>
                        Intensity, Credibility, and Enthusiasm.
                        <br />
                        This is what “ICE” means to instructors at the Air Force SERE
                        school and it’s what makes SERE Specialists some of the best in the world.
                    </p>

                    <p className="paragraph_small_black">
                        Spiritual, emotional, mental, and physical: on each of these levels
                        we have stories of people with faith and perseverance accomplishing
                        incredible feats, sending ripples of hope into the world. We can all
                        use a reminder of our own unique power and potential. There will
                        never be another YOU again, so make the most of this journey by
                        weaving your own story of inspiration and beauty!
                    </p>

                    <p className="paragraph_small_black">
                        What would you like to bring to the forefront for your audience? A
                        new perspective, outdoor education, personal growth, empowerment,
                        humility and interconnectedness, solidarity in a goal... Humanity is
                        a planet of stories and we are a story-telling species. They are the
                        best learning and mood altering tool we have.
                    </p>

                    <p className="paragraph_small_black">
                        Jessie is a powerful and experienced story teller, recounting
                        experiences that illustrate concepts, triumphs, and mistakes to
                        educate and inspire students of all ages.
                    </p>

                    <p className="paragraph_small_black">
                        For pricing, please reach out and we can discuss what works with
                        your budget and goals.
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