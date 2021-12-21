import { useState, useEffect, useRef, createRef } from "react";

import styles from "../styles/Layout.module.scss";
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
  const [sidebar, setSidebar] = useState(false);

  const handleClickOutside = (event: any) => {
    console.log(ref.current)
    if (ref.current && event.target! && !ref.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  const ref : React.RefObject<HTMLInputElement> = createRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div className={styles.layout}>
      <div className={styles.navWrapper} id="navbar-container" ref={ref}>
        <Navbar isAuth={props.isAuth} sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;