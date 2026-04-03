import Image from "next/image";
import styles from "./TeamBuildingDetailSection.module.css";
import { SquareButton } from "../interaction/SquareButton";
import { ContentPanel } from "../content/ContentPanel";

export function TeamBuildingDetailSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.topRow}>
                    <div className={styles.intro}>
                        <h2 className={`heading_black ${styles.heading}`}>TEAM BUILDING</h2>

                        <p className={`paragraph_medium_black ${styles.lead}`}>
                            Team building is an effective and powerful tool to help people
                            bond, connect, grow, and learn to appreciate each other.
                        </p>

                        <p className={`paragraph_medium_black ${styles.lead}`}>
                            Looking to make your group into a more effective team in a way
                            that challenges and inspires them while having fun?
                        </p>
                    </div>

                    <div className={styles.mosaicWrap}>
                        <Image
                            src="/Team_Building/Visualmosaic_2.png"
                            alt="Team building visual mosaic"
                            fill
                            className={styles.mosaicImage}
                            sizes="(max-width: 480px) calc(100vw - 24px), 430px"

                        />
                    </div>
                </div>

                <div className={styles.bodyCopy}>
                    <p className="paragraph_small_black">
                        There are two different tracks for our team building program:
                        Traditional with games, activities, and workshops that inspire
                        honest feedback, brainstorming, and solution-based discussions; and
                        Survival with principles learned and put to the test in a more
                        competitive and physically challenging scenario. Either track can
                        happen at your office, though the survival track is more fun
                        outside!
                    </p>

                    <p className="paragraph_small_black">
                        Both tracks are custom designed to target specific goals chosen from
                        the list below or whatever you have in mind:
                    </p>

                    <ul className={styles.list}>
                        <li>Increasing communication in general</li>
                        <li>Improving communication clarity and quality</li>
                        <li>
                            Exploring leadership styles in the organization and ways to
                            improve based on employee needs
                        </li>
                        <li>
                            How to be a better follower and support leaders more effectively
                        </li>
                        <li>Goal development and achievement</li>
                        <li>
                            Techniques to help team members relax, focus, and stay grounded
                        </li>
                        <li>
                            Encourage open and creative discussions that pull on ALL team
                            member&apos;s knowledge and experience
                        </li>
                        <li>Normalizing conflict resolution and consistent feedback</li>
                        <li>
                            Improving trust and vulnerability between team members
                        </li>
                        <li>
                            Identifying personality traits, team dynamics, and cliques and
                            how they can work for versus against you
                        </li>
                    </ul>

                    <p className="paragraph_small_black">
                        Just to name a few topics we can work on together in a playful and
                        supportive environment!
                    </p>
                </div>

                <div className={styles.ctaRow}>
                    <SquareButton
                        href="/contact"
                        shape="rounded"
                        className={styles.cta}
                    >
                        CREATE YOUR TEAM BUILDING
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
                        If you have a hard budget or are a nonprofit, please reach out,
                        we do offer discounts on occasion and for some organizations we
                        will do pro bono courses. Additional charges may apply for travel
                        time/costs and any permits or land/facility use costs that may be needed.
                    </>,
                    <>
                        In-person hourly rate: $40 per person per hour with a minimum of 5 people
                        (minimum of $200 per hour), and a maximum of 20 to several hundred folks
                        based on your learning objectives and style of event.
                    </>,
                    <>

                        In-person daily rate: $200 per person
                        per day (up to 8 hours of instruction) with a minimum of 5 people (minimum of $1000 per day),
                        and a maximum of 20 to several hundred folks based on your learning objectives and style of event.
                    </>,
                    <>
                        In-person multi-day/overnight trips: $300 per person per day (up to 12 hours of instruction per 24
                        hours) with a minimum of 5 people (minimum of $1500 per day), and a maximum of anywhere
                        from 8 to 12 folks based on your learning objectives. This usually also includes dinners
                        cooked over the fire for all participants.

                    </>]}
            />
        </section>
    );
}