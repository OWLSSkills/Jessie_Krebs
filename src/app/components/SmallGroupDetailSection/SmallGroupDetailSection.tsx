import Image from "next/image";
import styles from "./SmallGroupDetailSection.module.css";
import { SquareButton } from "../interaction/SquareButton";
import { ContentPanel } from "../content/ContentPanel";

export function SmallGroupDetailSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h1 className={`heading_black ${styles.title}`}>SMALL GROUP EVENTS</h1>

                <p className={`paragraph_medium_black ${styles.intro}`}>
                    Friends, family, coworkers: getting together to learn and play is
                    always fun! Whether you are an avid outdoorsperson, want to know what
                    to do when things go wrong, or are looking for a fun get-together with
                    activities and competitive games, we can make it happen!
                </p>

                <div className={styles.middleRow}>
                    <div className={styles.leftColumn}>
                        <section className={styles.block}>
                            <h2 className={styles.label}>THE SETTINGS:</h2>
                            <ul className={styles.simpleList}>
                                <li>around a fire at night</li>
                                <li>hiking through wilderness near or far</li>
                                <li>boating, climbing, or surviving a night out </li>
                                <li>in your backyard</li>
                                <li>at the office</li>
                                <li>in a local park</li>
                                <li>at church</li>
                                <li>with your local club</li>
                                <li>international or domestic</li>
                            </ul>
                        </section>

                        <section className={styles.block}>
                            <h2 className={styles.label}>THE TOPICS:</h2>
                            <ul className={styles.simpleList}>
                                <li>Leave No Trace concepts</li>
                                <li>Games and activities that encourage fun and bonding</li>
                                <li>Backpacking principles</li>
                                <li>Emergency preparedness</li>
                                <li>Interpersonal communication and therapeutic concepts</li>
                                <li>
                                    Survival techniques: building fires, shelters, signaling for
                                    help, off-trail navigation, first aid, etc...
                                </li>
                                <li>Stealth and evasion principles</li>
                            </ul>
                        </section>
                    </div>

                    <div className={styles.mosaicWrap}>
                        <Image
                            src="/Small_Group_Events/Visualmosaic_4.png"
                            alt="Small group events visual mosaic"
                            fill
                            className={styles.mosaicImage}
                            sizes="(max-width: 480px) calc(100vw - 24px), 430px"

                        />
                    </div>
                </div>

                <section className={styles.peopleBlock}>
                    <h2 className={styles.label}>THE PEOPLE:</h2>
                    <ul className={styles.simpleList}>
                        <li>
                            Marginalized demographics that feel more comfortable learning in a
                            group of familiar faces or similar backgrounds
                        </li>
                        <li>
                            Bachelor or bachelorette parties to create a more relaxed and
                            grounded environment for bonding, and what a great story for later
                        </li>
                        <li>
                            Family reunions with team and survival themed games, activities,
                            and lighthearted competition
                        </li>
                        <li>Adult birthday, divorce, and life transition party celebrations</li>
                        <li>
                            Special needs groups like elderly, or those with mental and/or
                            physical impediments
                        </li>
                        <li>
                            Hobby groups: book club, quilters, hiking, singing, church, etc...
                        </li>
                    </ul>
                </section>

                <div className={styles.ctaRow}>
                    <SquareButton
                        href="/contact"
                        shape="rounded"
                        className={styles.cta}
                    >
                        CREATE YOUR EVENT
                    </SquareButton>
                </div>
            </div>
            <br />
            <br />
            <br />
            <ContentPanel
                title="General Pricing"
                width="70%"
                paragraphs={[
                    <>
                        If you have a hard budget please reach out! Additional charges may apply for travel
                        time/costs and any permits or land/facility use costs that may be needed.
                    </>,
                    <>
                        In-person hourly rate: $40 per person per hour with a minimum of 5 people (minimum of $200 per hour),
                        and a maximum of anywhere from 8 to 20 folks based on your learning objectives.
                    </>,
                    <>
                        In-person daily rate: $200 per person per day (up to 8 hours of instruction) with a minimum of 5 people
                        (minimum of $1000 per day), and a maximum of anywhere from 8 to 20 folks based on your learning objectives.
                    </>,
                    <>
                        In-person multi-day/overnight trips: $300 per person per day (up to 12 hours of instruction per 24 hours)
                        with a minimum of 5 people (minimum of $1500 per day), and a maximum of anywhere from 8 to 12 folks based
                        on your learning objectives.
                        This usually also includes dinners cooked over the fire for all participants.
                    </>,
                    <>
                        In-person week-long (seven day/night) private custom courses: $1,990 pp for 5 folks, $1,890 pp for 6-8
                        folks, and $1,790 pp for 9-12 folks. Please contact us by phone if you’d like to look into doing courses
                        longer than 7 days. This usually also includes dinners for all participants.

                    </>]}
            />
        </section>
    );
}