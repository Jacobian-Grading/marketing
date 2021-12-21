import { useState } from "react";

import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar = (props: NavbarProps) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>AutoComp</a>
      </Link>
      <div className={!sidebar ? styles.navMenu : styles.mobileNavMenu}>
        <div className={styles.exitButton} onClick={() => setSidebar(false)}> X</div>
        <Link href="#features">
          <a className={styles.navItem}>Features</a>
        </Link>
        <Link href="#contact">
          <a className={styles.navItem}>Contact Us</a>
        </Link>
        <Link href="https://forms.gle/EttbSTTrY7NtGnso7">
          <a className={styles.navItemEmph}>Join Waitlist</a>
        </Link>
      </div>
      {!sidebar && (
        <div
          className={styles.mobileHamburger}
          onClick={() => setSidebar(true)}
        >
          <div className={styles.hamburgerBar} />
          <div className={styles.hamburgerBar} />
          <div className={styles.hamburgerBar} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
