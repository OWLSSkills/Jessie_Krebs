import Image from "next/image";
import styles from "./CuriousSection.module.css";
import { SquareButton } from "../../interaction/SquareButton";

const curiousItems = [
  {
    title: "GENERAL PACKING LISTS",
    href: "https://website-linking-page.vercel.app/packing_list",
    imageSrc: "/home/tarpa.png",
    imageAlt: "General packing lists preview",
  },
  {
    title: "OWLS SKILLS WOMEN'S SURVIVAL SCHOOL BY JESSIE KREBS",
    href: "https://www.owlsskills.com",
    imageSrc: "/images/OWLS_color_without_description.png",
    imageAlt: "OWLS Skills logo",
  },
  {
    title: "SURVIVAL SKILLS ONLINE LEARNING BY JESSIE KREBS",
    href: "https://website-linking-page.vercel.app/online_learning",
    imageSrc: "/home/Jessie_knots.png",
    imageAlt: "Survival skills online learning preview",
  },
];

export function CuriousSection() {
  return (
    <section className={styles.section}>
      <div className={styles.headingBand}>
        <div className={styles.inner}>
          <h2 className={`heading_accent ${styles.heading}`}>
            IN CASE YOU&apos;RE CURIOUS...
          </h2>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {curiousItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <SquareButton href={item.href} className={styles.cardButton}>
                {item.title}
              </SquareButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}