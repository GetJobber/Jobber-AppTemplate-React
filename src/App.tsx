import { BrowserRouter, Route, Routes } from "react-router-dom";
import appLogo from "assets/images/app-logo-placeholder.svg";
import AppFrame from "components/AppFrame";
import Home from "pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppFrame logo={appLogo} />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
