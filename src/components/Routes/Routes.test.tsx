import { render, screen } from "utils/tests";
import Routes from "./Routes";

test("render home route when authenticated", async () => {
  render(<Routes />, {
    user: { accountName: "Capsule Corp." },
    router: { initialEntries: [{ pathname: "/home" }] },
  });

  expect(await screen.findByText(/Bulma/i)).toBeInTheDocument();
});

test("render auth routes when not-authenticated", async () => {
  render(<Routes />, {
    router: { initialEntries: [{ pathname: "/home" }] },
  });

  expect(
    await screen.findByText(/Authentication in Progress/i),
  ).toBeInTheDocument();
});
