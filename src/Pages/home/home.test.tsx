/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Home from "./home";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home component", () => {
  test("renders Home Page", () => {
    const tree = renderer.create(<MockHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render home text", () => {
    render(<MockHome />);
    const headingElement = screen.getByText(/home/i);
    expect(headingElement).toBeInTheDocument();
  });
});
