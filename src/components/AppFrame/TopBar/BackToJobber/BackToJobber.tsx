import { Icon } from "@jobber/components/Icon";
import { Text } from "@jobber/components/Text";
import styles from "./BackToJobber.module.scss";

type Props = {
  url: string;
};

const BackToJobber = ({ url }: Props) => {
  return (
    <div className={styles.container}>
      <a href={url}>
        <Icon name="backArrow" />
        <Text>Back to Jobber</Text>
      </a>
    </div>
  );
};

export default BackToJobber;
