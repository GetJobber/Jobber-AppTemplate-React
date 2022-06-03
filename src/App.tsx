import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router-dom";

import Home from "./components/Home/Homte";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const Home = () => {
//   return <div>Home</div>;
// };

const Auth = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  //call our api get response

  //if(reponse) redirect to /
  return (
    // <div>
    //   <pre>params: {JSON.stringify(params, null, 2)}</pre>
    //   <pre>searchParams: {JSON.stringify({ code }, null, 2)}</pre>
    // </div>
    <></>
  );
};

export default App;
