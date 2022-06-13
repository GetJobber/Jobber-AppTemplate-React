import BackToJobber from "./BackToJobber";
import JobberLogo from "./JobberLogo";
import Settings from "./Settings";
import styles from "./TopBar.module.scss";

const TopBar = () => {
  const url = process.env.REACT_APP_JOBBER_URL || "https://getjobber.com/";
  return (
    <div className={styles.container}>
      <JobberLogo url={url} />
      <BackToJobber url={url} />
      <Settings />
    </div>
  );
};

export default TopBar;
