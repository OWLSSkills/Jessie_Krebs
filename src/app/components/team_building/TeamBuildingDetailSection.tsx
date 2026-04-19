
import Image from "next/image";
import styles from "./TeamBuildingDetailSection.module.css";
import { SquareButton } from "../interaction/SquareButton";

export function TeamBuildingDetailSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.contentFlow}>
                    <div className={styles.mosaicWrap}>
                        <Image
                            src="/Team_Building/Visualmosaic_2.png"
                            alt="Team building visual mosaic"
                            fill
                            className={styles.mosaicImage}
                            sizes="(max-width: 480px) calc(100vw - 24px), 430px"

                        />
                    </div>

                    <h1 className={`heading_black ${styles.title}`}>TEAM BUILDING</h1>

                    <p className={`paragraph_medium_black ${styles.lead}`}>
                        Team building is an effective and powerful tool to help people
                        bond, connect, grow, and learn to appreciate each other.
                    </p>
                    <p className={`paragraph_medium_black ${styles.lead}`}>
                        Looking to make your group into a more effective team in a way
                        that challenges and inspires them while having fun?
                    </p>

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
                    <SquareButton href="/contact" shape="rounded">
                        CREATE YOUR EVENT
                    </SquareButton>
                </div>
            </div>
        </section>
    );
}