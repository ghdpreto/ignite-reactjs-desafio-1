import styles from "./Header.module.scss";

import logoRocket from "../assets/logo-rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoRocket} alt="Logo ToDo List" />
    </header>
  );
}
