import React from "react";
import renderer from "react-test-renderer";
import { episodeData } from "../../__mocks__/episodeData";
import CharTable from "./charTable";

describe("CharTable component", () => {
  test("renders CharTable Component", () => {
    const tree = renderer.create(<CharTable data={episodeData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
