import styles from "./ContentPanel.module.css";

type ContentPanelProps = {
  title: string;
  paragraphs: React.ReactNode[];
  className?: string;
  width?: string;
};

export function ContentPanel({
  title,
  paragraphs,
  className = "",
  width = "100%",
}: ContentPanelProps) {
  const classes = [styles.contentPanel, className].filter(Boolean).join(" ");

  return (
    <div className={classes} style={{ width }}>
      <h2 className={`heading_accent ${styles.title}`}>{title}</h2>

      <div className={styles.copy}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="paragraph_small_white">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}