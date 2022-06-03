import { Button } from "@jobber/components/Button";
import { Icon } from "@jobber/components/Icon";
import { Menu } from "@jobber/components/Menu";
import { Text } from "@jobber/components/Text";
import React from "react";
// @ts-ignore
import logo from "../../../assets/images/jobber_logo.svg";
// @ts-ignore
import styles from "./TopBar.module.scss";

const TopBar = () => {
  const url = process.env.JOBBER_URL || "";
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          <a href={url}>
            <img
              src={`${process.env.RAILS_RELATIVE_URL_ROOT ?? ""}${logo}`}
              alt="jobber logo"
            />
          </a>
        </div>

        <div className={styles.linkContainer}>
          <a href={url}>
            <Icon name="backArrow" />
            <Text>Back to Jobber</Text>
          </a>
        </div>
        <div className={styles.settingsMenu}>
          <Text>{`ACCOUNT_NAME`}</Text>

          <div style={{ marginRight: "var(--space-smaller)" }}>
            <Menu
              activator={
                <Button
                  type="tertiary"
                  variation="subtle"
                  ariaLabel="settings"
                  icon="cog"
                />
              }
              items={[
                {
                  actions: [
                    {
                      label: "Log out",
                      icon: "logout",
                      onClick: () =>
                        (window.location.href = `${window.location.origin}${
                          process.env.RAILS_RELATIVE_URL_ROOT ?? ""
                        }/logout`),
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
