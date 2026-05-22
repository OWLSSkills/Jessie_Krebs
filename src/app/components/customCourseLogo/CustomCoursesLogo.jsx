import styles from "./CustomCoursesLogo.module.css";

export default function CustomCoursesLogo({
  titleSize = "clamp(2rem, 2vw, 2.75rem)",
  subtitleRatio = 0.5,
  align = "center",
  className = "",
  href = "/",
  external = false,
}) {
  const content = (
    <>
      <h2 className={styles.title}>Custom Courses</h2>
      <p className={styles.subtitle}>by Jessie Krebs</p>
    </>
  );

  return (
    <a
      href={href}
      className={`${styles.logo} ${className}`}
      style={{
        "--title-size": titleSize,
        "--subtitle-size": `calc(var(--title-size) * ${subtitleRatio})`,
        "--logo-align": align,
      }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label="Custom Courses by Jessie Krebs"
    >
      {content}
    </a>
  );
}