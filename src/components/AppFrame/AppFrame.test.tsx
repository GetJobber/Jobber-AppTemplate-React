import { render, screen } from "utils/tests";
import AppFrame from "./AppFrame";
import appLogo from "assets/images/app-logo-placeholder.svg";

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
