import { Page } from "@jobber/components/Page";
import { Spinner } from "@jobber/components/Spinner";
import { Text } from "@jobber/components/Text";
import ClientsTable from "components/ClientsTable";
import EmptyStateCard from "components/EmptyStateCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClients } from "services";

function Home() {
  const [clients, setClients] = useState([]);
  const [isFetchingClients, setIsFetchingClients] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setIsFetchingClients(true);
        const { data } = await getClients();
        setClients(data.clients);
        setIsFetchingClients(false);
      } catch (error) {
        setIsFetchingClients(false);
        navigate("/auth");
      }
    })();
  }, []);
  return (
    <Page title="👋  Congrats on building a Jobber app" width="fill">
      <div style={{ maxWidth: "854px" }}>
        <Text size="large">
          To customize it and turn it into something you can call your own,
          explore the Atlantis components (
          <a href="https://www.npmjs.com/package/@jobber/components">
            @jobber/components
          </a>
          ), and our{" "}
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
      {isFetchingClients ? (
        <Spinner size="small" />
      ) : clients.length > 0 ? (
        <ClientsTable clients={clients} />
      ) : (
        <EmptyStateCard />
      )}
    </Page>
  );
}

export default Home;
