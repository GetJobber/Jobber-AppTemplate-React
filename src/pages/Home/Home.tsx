import { Page } from "@jobber/components/Page";
import { Text } from "@jobber/components/Text";
import ClientsTable from "components/ClientsTable";

function App() {
  return (
    <Page title="👋  Congrats on building a Jobber app" width="fill">
      <div style={{ maxWidth: "854px" }}>
        <Text size="large">
          To customize it and turn it into something you can call your own,
          explore{" "}
          <a href="https://atlantis.getjobber.com/">Atlantis design system</a>,
          and our{" "}
          <a href="https://developer.getjobber.com/docs/">GraphQL API docs</a>.
          Turn that dream into a reality.
        </Text>
        <br />
        <Text size="large">
          Below you can see a list of the Clients in the connected Jobber
          account . Check out to see the GraphQL query that was used to retrieve
          this Client info.
        </Text>
      </div>
      <ClientsTable
        clients={[
          { name: "Nostromo", id: 1 },
          { name: "Rodger Young", id: 2 },
          { name: "USS Enterprise", id: 3 },
        ]}
      />
    </Page>
  );
}

export default App;
