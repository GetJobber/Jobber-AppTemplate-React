import { FC } from "react";
import styles from "./Logo.module.scss";

type AppLogo = {
  logo: string;
};

const Logo: FC<AppLogo> = ({ logo }) => {
  return (
    <div className={styles.logo}>
      <img
        src={`${process.env.RAILS_RELATIVE_URL_ROOT ?? ""}${logo}`}
        alt="app logo"
      />
    </div>
  );
};

export default Logo;
