import { render, screen } from "@testing-library/react";
import ClientsTable from "./ClientsTable";

test("render client table if valid prop is passed", () => {
  render(<ClientsTable clients={[{ id: 1, name: "Bulma" }]} />);
  expect(screen.getByText(/Clients/i)).toBeInTheDocument();
  expect(screen.getByText(/Bulma/i)).toBeInTheDocument();
});
