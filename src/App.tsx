import { Page } from "@jobber/components/Page";
import { Text } from "@jobber/components/Text";
import React from "react";

function App() {
  return (
    <Page title="👋  Congrats on building a Jobber app">
      <Text>React version: {React.version}</Text>
    </Page>
  );
}

export default App;
