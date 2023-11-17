import Link from "next/link";
import styles from "./styles.module.css";
import classNames from "classnames";
export const MainLink = ({ children, href, theme, className }) => {
  return (
    <Link
      href={href}
      className={classNames(styles.link, {
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </Link>
  );
};
