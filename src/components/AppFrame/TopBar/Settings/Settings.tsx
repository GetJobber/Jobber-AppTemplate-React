import { Button } from "@jobber/components/Button";
import { Menu } from "@jobber/components/Menu";
import { Text } from "@jobber/components/Text";
import { useUserContext } from "contexts";
import { redirectToJobber, removeFromLocalStorage } from "helpers";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "services";
import styles from "./Settings.module.scss";

const Settings = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const handleLogout = useCallback(async () => {
    try {
      await logout();
      removeFromLocalStorage("user");
      redirectToJobber();
    } catch (error) {
      navigate("/auth");
    }
  }, []);
  return (
    <div className={styles.settingsMenu}>
      <Text>{user.accountName}</Text>
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
                  onClick: handleLogout,
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
