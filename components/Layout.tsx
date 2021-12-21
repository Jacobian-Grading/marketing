import {useState} from "react";

import styles from "../styles/Layout.module.scss";
import Link from "next/link";
import Navbar from "../components/Navbar"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        Made with ❤️ by the AutoComp team
      </div>
    </footer>
  );
};

interface LayoutProps {
  isAuth: boolean;
  children?: string | JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navWrapper}>
        <Navbar isAuth={props.isAuth} />
      </div>
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;