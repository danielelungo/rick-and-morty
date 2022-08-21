import React from "react";
import renderer from "react-test-renderer";
import { episodeDetails } from "../../__mocks__/episodeDetails";
import { locationDetails } from "../../__mocks__/locationDetails";
import LocationDetails from "./locationDetails";

describe("LocationDetails component", () => {
  test("renders LocationDetails Component", () => {
    const tree = renderer
      .create(
        <LocationDetails
          mainData={locationDetails}
          error={""}
          response={episodeDetails}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
