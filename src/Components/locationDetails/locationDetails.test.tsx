import { render, screen } from "@testing-library/react";
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
  test("renders error", () => {
    render(
      <LocationDetails
        mainData={locationDetails}
        error={"There is no origin url"}
        response={episodeDetails}
      />,
    );
    const errorText = screen.getByText(/There is no origin url/i);
    expect(errorText).toBeInTheDocument();
  });
});
