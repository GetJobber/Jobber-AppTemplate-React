import { FC } from "react";
import styles from "./EmptyStateCard.module.scss";

const EmptyStateCard: FC = () => {
  return (
    <>
      <div className={styles.emptyCardContainer} data-testid="empty-card-state">
        <div className={styles.emptyCardSkeleton}>
          <div className={styles.emptyCardHeaderText}></div>
        </div>
      </div>
    </>
  );
};

export default EmptyStateCard;
