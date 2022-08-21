import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { episodeData } from "../../__mocks__/episodeData";
import CharTable from "./charTable";

describe("CharTable component", () => {
  test("renders CharTable Component", () => {
    const tree = renderer.create(<CharTable data={episodeData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correct Name, Episode Numer and Date text", () => {
    render(<CharTable data={episodeData} />);
    const episodeNumberText = screen.getByText(episodeData[0].episode);
    const episodeNameText = screen.getByText(episodeData[0].name);
    const releaseDateText = screen.getByText(episodeData[0].date);
    expect(episodeNumberText).toBeInTheDocument();
    expect(episodeNameText).toBeInTheDocument();
    expect(releaseDateText).toBeInTheDocument();
  });
});
