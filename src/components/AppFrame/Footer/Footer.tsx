import { Icon } from "@jobber/components/Icon";
import { Text } from "@jobber/components/Text";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Icon name="help" color="heading" />
      <Text>
        <a href="https://help.getjobber.com/">Need help?</a>
      </Text>
    </div>
  );
};

export default Footer;
