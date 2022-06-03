import React, { FC } from "react";

import { AppFrameProps } from "../interfaces";
// @ts-ignore
import styles from "./Logo.module.scss";

const Logo: FC<AppFrameProps> = ({ logo }) => {
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
