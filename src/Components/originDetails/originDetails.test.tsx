import React from "react";
import renderer from "react-test-renderer";
import { episodeDetails } from "../../__mocks__/episodeDetails";
import { locationDetails } from "../../__mocks__/locationDetails";
import OriginDetails from "./origindetails";

describe("OriginDetails component", () => {
  test("renders OriginDetails Component", () => {
    const tree = renderer
      .create(
        <OriginDetails
          mainData={locationDetails}
          error={""}
          response={episodeDetails}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
