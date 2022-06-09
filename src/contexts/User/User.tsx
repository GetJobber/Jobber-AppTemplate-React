import { createContext } from "helpers";
import { FC, useCallback, useState } from "react";
import { User } from "types/user";

interface UserContext {
  user: User;
  setUser: (newUser: User) => void;
}

interface UserProviderProps {
  initialValue?: User;
}

export const [useUserContext, UserCtxProvider] = createContext<UserContext>();

const UserProvider: FC<UserProviderProps> = ({ children, initialValue }) => {
  const [user, setUser] = useState<User>(() => {
    if (initialValue) return initialValue;

    const persistedUser = localStorage.getItem("user");

    if (!persistedUser) return "";

    return { ...JSON.parse(persistedUser) };
  });

  const updateUser = useCallback((newUser: User) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }, []);

  return (
    <UserCtxProvider value={{ user, setUser: updateUser }}>
      {children}
    </UserCtxProvider>
  );
};

export default UserProvider;
