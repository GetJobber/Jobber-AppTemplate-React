import { render, screen } from "@testing-library/react";
import AppLogo from "./AppLogo";
import appLogo from "assets/images/app-logo-placeholder.svg";

test("renders app logo", () => {
  render(<AppLogo logo={appLogo} />);
  expect(screen.getByAltText("app logo")).toBeInTheDocument();
});
