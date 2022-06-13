import { render, screen } from "@testing-library/react";
import EmptyStateCard from "./EmptyStateCard";

test("renders without error", () => {
  render(<EmptyStateCard />);
  expect(screen.getByTestId("empty-card-state")).toBeInTheDocument();
});
