import React from "react";
import appLogo from "../../assets/images/app_logo.svg";
import AppFrame from "../AppFrame";
import { Page } from "@jobber/components/Page";
import { Body, Cell, Header, Row, Table } from "@jobber/components/Table";
import { Text } from "@jobber/components/Text";

function App() {
  return (
    <>
      <AppFrame logo={appLogo}>
        <Page title="👋  Congrats on building a Jobber app" width="fill">
          <div style={{ maxWidth: "854px" }}>
            <Text size="large">
              To customize it and turn it into something you can call your own,
              explore{" "}
              <a href="https://atlantis.getjobber.com/">
                Atlantis design system
              </a>
              , and our{" "}
              <a href="https://developer.getjobber.com/docs/">
                GraphQL API docs
              </a>
              . Turn that dream into a reality.
            </Text>
            <br />
            <Text size="large">
              Below you can see a list of the Clients in the connected Jobber
              account . Check out to see the GraphQL query that was used to
              retrieve this Client info.
            </Text>
          </div>
          <Table>
            <Header>
              <Cell>Clients</Cell>
            </Header>
            <Body>
              <Row>
                <Cell>Nostromo</Cell>
              </Row>
              <Row>
                <Cell>Rodger Young</Cell>
              </Row>
              <Row>
                <Cell>USS Enterprise</Cell>
              </Row>
            </Body>
          </Table>
        </Page>
      </AppFrame>
    </>
  );
}

export default App;
