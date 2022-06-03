import React, { FC } from "react";

// @ts-ignore
import styles from "./AppFrame.module.scss";
import Footer from "./Footer";
import { AppFrameProps } from "./interfaces";
import Logo from "./Logo";
import TopBar from "./TopBar";

const AppFrame: FC<AppFrameProps> = ({ logo, children }) => {
  return (
    <div className={styles.appFrame}>
      <TopBar />

      <div className={styles.scrollWrapper}>
        <div className={styles.centerWrapper}>
          <Logo logo={logo} />

          <div className={styles.content}>{children}</div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppFrame;
