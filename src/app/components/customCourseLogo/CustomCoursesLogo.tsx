import type { CSSProperties } from "react";
import styles from "./CustomCoursesLogo.module.css";

type CustomCoursesLogoCssVars = CSSProperties & {
  "--title-size": string;
  "--subtitle-size": string;
  "--logo-align": "left" | "center" | "right";
};

type CustomCoursesLogoProps = {
  titleSize?: string;
  subtitleRatio?: number;
  align?: "left" | "center" | "right";
  className?: string;
  href?: string;
  external?: boolean;
};

export default function CustomCoursesLogo({
  titleSize = "clamp(2rem, 2vw, 2.75rem)",
  subtitleRatio = 0.5,
  align = "center",
  className = "",
  href = "/",
  external = false,
}: CustomCoursesLogoProps) {
  const style: CustomCoursesLogoCssVars = {
    "--title-size": titleSize,
    "--subtitle-size": `calc(var(--title-size) * ${subtitleRatio})`,
    "--logo-align": align,
  };

  return (
    <a
      href={href}
      className={`${styles.logo} ${className}`}
      style={style}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label="Custom Courses by Jessie Krebs"
    >
      <h2 className={styles.title}>Custom Courses</h2>
      <p className={styles.subtitle}>by Jessie Krebs</p>
    </a>
  );
}