import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppFrame.module.scss";
import Footer from "./Footer";
import AppLogo from "./AppLogo";
import TopBar from "./TopBar";

type AppFrameProps = {
  logo: string;
};

const AppFrame: FC<AppFrameProps> = ({ logo }) => {
  return (
    <div className={styles.appFrame}>
      <TopBar />
      <div className={styles.scrollWrapper}>
        <div className={styles.centerWrapper}>
          <AppLogo logo={logo} />
          <div className={styles.content}>{<Outlet />}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppFrame;
