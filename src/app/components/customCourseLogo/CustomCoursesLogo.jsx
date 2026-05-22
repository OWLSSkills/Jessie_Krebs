import styles from "./CustomCoursesLogo.module.css";

export default function CustomCoursesLogo({
  titleSize = "clamp(2rem, 2vw, 2.75rem);",
  subtitleRatio = 0.38,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={`${styles.logo} ${className}`}
      style={{
        "--title-size": titleSize,
        "--subtitle-size": `calc(var(--title-size) * ${subtitleRatio})`,
        "--logo-align": align,
      }}
    >
      <h2 className={styles.title}>Custom Courses</h2>
      <p className={styles.subtitle}>by Jessie Krebs</p>
    </div>
  );
}