import { Body, Cell, Header, Row, Table } from "@jobber/components/Table";
import { Client } from "types";

type Props = {
  clients: Array<Client>;
};

const ClientsTable = ({ clients }: Props) => {
  return (
    <Table>
      <Header>
        <Cell>Clients</Cell>
      </Header>
      <Body>
        {clients.map(({ id, name }) => (
          <Row key={id}>
            <Cell>{name}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
};

export default ClientsTable;
