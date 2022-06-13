import Routes from "components/Routes";
import { UserProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
