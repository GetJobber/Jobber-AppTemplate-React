import { render, screen } from "utils/tests";
import TopBar from "./TopBar";

test("TopBar page shows greeting message", async () => {
  render(<TopBar />, {
    user: { accountName: "Capsule Corp." },
  });

  const companyName = await screen.findByText(/Capsule Corp./i);
  expect(companyName).toBeInTheDocument();
});
