import { Spinner } from "@jobber/components/Spinner";
import { useUserContext } from "contexts";
import { redirectToJobberOAuth } from "helpers";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authenticateUser } from "services";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  if (code === null) redirectToJobberOAuth();

  useEffect(() => {
    if (code) {
      (async () => {
        const { data: user } = await authenticateUser(code);
        setUser(user);
        navigate("/home", { replace: true });
      })();
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Spinner />
      <h1>Authentication in progress</h1>
    </div>
  );
};

export default Auth;
