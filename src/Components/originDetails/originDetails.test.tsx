import React from "react";
import { render, screen } from "@testing-library/react";
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
  test("renders error", () => {
    render(
      <OriginDetails
        mainData={locationDetails}
        error={"There is no origin url"}
        response={episodeDetails}
      />,
    );
    const errorText = screen.getByText(/There is no origin url/i);
    expect(errorText).toBeInTheDocument();
  });
});
