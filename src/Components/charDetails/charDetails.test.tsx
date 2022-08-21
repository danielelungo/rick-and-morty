import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import CharDetail from "./charDetails";

describe("CharDetails component", () => {
  test("renders CharDetails Component", () => {
    const tree = renderer
      .create(<CharDetail data={10} list={false} title={"origin"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("renders correct Title", () => {
    render(
      <CharDetail list={false} data={"Albert Einstein"} title={"Location: "} />,
    );
    const titleText = screen.getByText(/Location: Albert Einstein/);
    expect(titleText).toBeInTheDocument();
  });
  test("renders List if list prop is true", () => {
    render(
      <CharDetail list={true} data={"Albert Einstein"} title={"Location: "} />,
    );
    const listItem = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });
});
