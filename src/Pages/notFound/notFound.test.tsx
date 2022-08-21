/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import NotFound from "./notFound";

describe("NotFound component", () => {
  test("renders NotFound Page", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

NotFound;
