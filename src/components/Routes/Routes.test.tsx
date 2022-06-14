import userEvent from "@testing-library/user-event";
import { server } from "mocks/server";
import { rest } from "msw";
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

test("log out when not authenticated redirects to auth", async () => {
  server.use(
    rest.get("http://localhost:4000/logout", (req, res, ctx) => {
      return res(ctx.status(403));
    }),
  );
  render(<Routes />, {
    user: { accountName: "Capsule Corp." },
    router: { initialEntries: [{ pathname: "/home" }] },
  });

  const settingsBtn = await screen.findByTestId("cog");

  userEvent.click(settingsBtn);

  const logOutBtn = await screen.findByText(/Log out/i);

  userEvent.click(logOutBtn);

  expect(
    await screen.findByText(/Authentication in progress/i),
  ).toBeInTheDocument();
});
