import Routes from "components/Routes";
import { render, screen } from "utils/tests";
import Auth from "./Auth";

test("renders authentication in progress message", () => {
  render(<Auth />);
  expect(screen.getByText(/Authentication in progress/i)).toBeInTheDocument();
});
test("Redirects to /home authentication is sucessful", async () => {
  render(<Routes />, {
    router: {
      initialEntries: [{ pathname: "/auth", search: "code=SomeCode" }],
    },
  });

  expect(
    await screen.findByText(/CONGRATS ON BUILDING A JOBBER APP/i),
  ).toBeInTheDocument();

  expect(await screen.findByText("Bulma")).toBeInTheDocument();
});
