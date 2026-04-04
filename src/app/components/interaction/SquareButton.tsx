import Link from "next/link";
import styles from "./SquareButton.module.css";

type ButtonShape = "square" | "rounded";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  fullWidthOnMobile?: boolean;
  shape?: ButtonShape;
};

type LinkProps = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = BaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type SquareButtonProps = LinkProps | ButtonProps;

export function SquareButton(props: SquareButtonProps) {
  const {
    children,
    className = "",
    fullWidthOnMobile = false,
    shape = "square",
  } = props;

  const classes = [
    styles.button,
    shape === "rounded" ? styles.square : styles.square, 
    fullWidthOnMobile ? styles.fullWidthOnMobile : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}