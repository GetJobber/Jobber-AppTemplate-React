import Routes from "components/Routes";
import { UserProvider } from "contexts";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
