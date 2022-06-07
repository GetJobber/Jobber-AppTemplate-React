import logo from "assets/images/jobber_logo.svg";
import styles from "./JobberLogo.module.scss";

type Props = {
  url: string;
};

const JobberLogo = ({ url }: Props) => {
  return (
    <div className={styles.container}>
      <a href={url}>
        <img src={logo} alt="jobber logo" />
      </a>
    </div>
  );
};

export default JobberLogo;
