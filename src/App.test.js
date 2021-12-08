import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Counter in Solidity front", () => {
  render(<App />);
  const linkElement = screen.getByText(/Counter in Solidity/i);
  expect(linkElement).toBeInTheDocument();
});
