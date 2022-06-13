import Routes from "components/Routes";
import { createMemoryHistory } from "history";
import { render, screen, waitFor } from "utils/tests";
import Auth from "./Auth";

test("renders authentication in progress message", () => {
  render(<Auth />);
  expect(screen.getByText(/Authentication in progress/i)).toBeInTheDocument();
});
test("Redirects to /auth if api call fails", async () => {
  const history = createMemoryHistory();
  history.push("/auth?code=someCode");
  render(<Routes />, {
    router: { location: history.location, navigator: history },
  });

  await waitFor(() => expect(history.location.pathname).toBe("/"));
});
