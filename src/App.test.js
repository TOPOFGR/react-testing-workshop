import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Mocked");

describe("App", () => {
  test("renders without crashing", () => {
    const { asFragment } = render(<App />);

    // screen.logTestingPlaygroundURL()

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders learn react link", () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });
});
