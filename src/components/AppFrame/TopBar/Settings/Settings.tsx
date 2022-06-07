import { Button } from "@jobber/components/Button";
import { Menu } from "@jobber/components/Menu";
import { Text } from "@jobber/components/Text";
import styles from "./Settings.module.scss";

const Settings = () => {
  return (
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
  );
};

export default Settings;
