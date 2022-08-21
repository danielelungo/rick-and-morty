import React from "react";
import Char from "./allCharsTable";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { data } from "../../__mocks__/charData";
import { render, screen } from "@testing-library/react";

describe("AllCharsTable component", () => {
  test("renders AllCharsTable Component", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Char data={data} page={1} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correct Name, Status and Species text", () => {
    render(
      <BrowserRouter>
        <Char data={data} page={1} />
      </BrowserRouter>,
    );
    const nameText = screen.getByText(data[0].name);
    const statusText = screen.getByText(data[0].status);
    const speciesText = screen.getByText(data[0].species);
    expect(nameText).toBeInTheDocument();
    expect(statusText).toBeInTheDocument();
    expect(speciesText).toBeInTheDocument();
  });
  test("renders error if data.length is 0", () => {
    render(
      <BrowserRouter>
        <Char data={[]} page={1} />
      </BrowserRouter>,
    );
    const errorText = screen.getByText(/There is no data/);
    expect(errorText).toBeInTheDocument();
  });
});
