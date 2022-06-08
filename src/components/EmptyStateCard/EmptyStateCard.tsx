import { Heading } from "@jobber/components/Heading";
import { FC } from "react";
import styles from "./EmptyStateCard.module.scss";

const EmptyStateCard: FC = () => {
  return (
    <>
      <div className={styles.emptyCardContainer}>
        <div className={styles.emptyCardSkeleton}>
          <div className={styles.emptyCardHeaderText}>
            <Heading level={3}>Create your first scheduled report</Heading>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyStateCard;
