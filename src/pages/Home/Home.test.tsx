import Routes from "components/Routes";
import { createMemoryHistory } from "history";
import { server } from "mocks/server";
import { rest } from "msw";
import { render, screen, waitFor } from "utils/tests";
import Home from "./Home";

describe("Home page", () => {
  test("Home page shows congratulating message", async () => {
    render(<Home />);
    expect(
      screen.getByText(/CONGRATS ON BUILDING A JOBBER APP/i),
    ).toBeVisible();
    expect(await screen.findByText(/Bulma/i)).toBeInTheDocument();
  });

  test("Home page shows client's table when clients returned from the api", async () => {
    render(<Home />);
    expect(await screen.findByText(/Bulma/i)).toBeInTheDocument();
  });

  test("Home page shows empty state card when there's no clients returned from the api", async () => {
    server.use(
      rest.get("http://localhost:4000/clients", (req, res, ctx) => {
        return res(ctx.json({ clients: [] }));
      }),
    );
    render(<Home />);
    expect(await screen.findByTestId("empty-card-state")).toBeInTheDocument();
  });

  test("Redirects to /auth if api call fails", async () => {
    server.use(
      rest.get("http://localhost:4000/clients", (req, res, ctx) => {
        return res(ctx.status(403));
      }),
    );
    const history = createMemoryHistory();
    history.push("/home");
    render(<Routes />, {
      router: { location: history.location, navigator: history },
    });

    await waitFor(() => expect(history.location.pathname).toBe("/auth"));
  });
});
