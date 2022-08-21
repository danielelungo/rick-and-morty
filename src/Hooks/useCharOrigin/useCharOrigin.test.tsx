import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { locationDetails } from "../../__mocks__/locationDetails";
import useCharOrigin from "./useCharOrigin";

describe("useCharOrigin", () => {
  test("useCharOrigin performs GET request", async () => {
    const mock = new MockAdapter(axios);
    const url = `https://rickandmortyapi.com/api/location/20`;
    const mockData = locationDetails;

    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useCharOrigin(url));

    expect(result.current.originData).toEqual(undefined);

    await waitForNextUpdate();

    expect(result.current.originData).toEqual(locationDetails);
  });
  test("useCharOrigin should display error ", async () => {
    const mock = new MockAdapter(axios);
    const url = `https://rickandmortyapi.com/api/location/20`;
    const mockData = locationDetails;

    mock.onGet(url).reply(404, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useCharOrigin(url));

    expect(result.current.errorOrigin).toEqual("");

    await waitForNextUpdate();

    expect(result.current.errorOrigin).toEqual("Can't fetch data");
  });
});
