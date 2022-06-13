import { FC } from "react";
import styles from "./AppLogo.module.scss";

type AppLogo = {
  logo: string;
};

const Logo: FC<AppLogo> = ({ logo }) => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="app logo" />
    </div>
  );
};

export default Logo;
