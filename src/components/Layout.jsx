import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../style";

const Layout = () => (
  <div className="bg-primary w-full overflow-clip">
    <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-[99999] nav-bg`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Outlet />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-[99999] nav-bg`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
