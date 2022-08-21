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
});
