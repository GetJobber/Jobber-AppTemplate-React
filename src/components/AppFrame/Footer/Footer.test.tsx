import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders need help text", () => {
  render(<Footer />);
  expect(screen.getByText(/Need help/i)).toBeInTheDocument();
});
