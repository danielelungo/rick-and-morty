import { renderHook } from "@testing-library/react-hooks";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiUrl } from "../../Constants/url";
import { locationDetails } from "../../__mocks__/locationDetails";
import useCharLocation from "./useCharLocation";

const url = `${apiUrl}/location/20`;
const mockData = locationDetails;

describe("useChatLocation", () => {
  test("useChatLocation performs GET request", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useCharLocation(url),
    );

    expect(result.current.locationData).toEqual(undefined);

    await waitForNextUpdate();

    expect(result.current.locationData).toEqual(locationDetails);
  });
  test("useChatLocation should display error ", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(404, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useCharLocation(url),
    );

    expect(result.current.errorLocation).toEqual("");

    await waitForNextUpdate();

    expect(result.current.errorLocation).toEqual("Can't fetch data");
  });
});
