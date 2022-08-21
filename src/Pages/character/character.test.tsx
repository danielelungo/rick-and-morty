import React from "react";
import { BrowserRouter } from "react-router-dom";
import Character from "./character";
import renderer from "react-test-renderer";

const MockCharacter = () => {
  return (
    <BrowserRouter>
      <Character />
    </BrowserRouter>
  );
};

describe("Character page", () => {
  test("renders Character Page", () => {
    const tree = renderer.create(<MockCharacter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
