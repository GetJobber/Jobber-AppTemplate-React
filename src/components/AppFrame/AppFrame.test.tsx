import userEvent from "@testing-library/user-event";
import appLogo from "assets/images/app-logo-placeholder.svg";
import { render, screen, waitFor } from "utils/tests";
import AppFrame from "./AppFrame";

import { removeFromLocalStorage, redirectToJobber } from "helpers";

jest.mock("helpers", () => ({
  removeFromLocalStorage: jest.fn(),
  redirectToJobber: jest.fn(),
}));

test("renders app logo", () => {
  render(<AppFrame logo={appLogo} />);
  expect(screen.getByAltText("app logo")).toBeInTheDocument();
});

test("renders jobber logo", () => {
  render(<AppFrame logo={appLogo} />);
  expect(screen.getByAltText("jobber logo")).toBeInTheDocument();
});

test("renders back to jobber text", () => {
  render(<AppFrame logo={appLogo} />);
  expect(screen.getByText(/back to jobber/i)).toBeInTheDocument();
});

test("renders company name", async () => {
  render(<AppFrame logo={appLogo} />, {
    user: { accountName: "Capsule Corp." },
  });

  const companyName = await screen.findByText(/Capsule Corp./i);
  expect(companyName).toBeInTheDocument();
});

test("renders settings button", async () => {
  render(<AppFrame logo={appLogo} />, {
    user: { accountName: "Capsule Corp." },
  });

  const settingsBtn = await screen.findByTestId("cog");
  expect(settingsBtn).toBeInTheDocument();
});

test("shows logout option when settings button", async () => {
  render(<AppFrame logo={appLogo} />, {
    user: { accountName: "Capsule Corp." },
  });

  const settingsBtn = await screen.findByTestId("cog");

  userEvent.click(settingsBtn);

  expect(await screen.findByText(/Log out/i)).toBeInTheDocument();
});

test("perform log out when log out button is clicked", async () => {
  render(<AppFrame logo={appLogo} />, {
    user: { accountName: "Capsule Corp." },
  });

  const settingsBtn = await screen.findByTestId("cog");

  userEvent.click(settingsBtn);

  const logOutBtn = await screen.findByText(/Log out/i);

  userEvent.click(logOutBtn);

  await waitFor(() => expect(removeFromLocalStorage).toHaveBeenCalled());
  await waitFor(() => expect(redirectToJobber).toHaveBeenCalled());
});
