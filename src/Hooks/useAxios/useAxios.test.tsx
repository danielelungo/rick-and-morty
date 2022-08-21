import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { episodeDetails } from "../../__mocks__/episodeDetails";
import useAxios from "./useAxios";

describe("useAxios", () => {
  test("useAxios performs GET request", async () => {
    const id = 1;
    const mock = new MockAdapter(axios);
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    mock.onGet(url).reply(200, episodeDetails);

    const { result, waitForNextUpdate } = renderHook(() => useAxios(id));

    expect(result.current.response).toEqual(undefined);
    expect(result.current.location).toEqual("");
    expect(result.current.origin).toEqual("");

    await waitForNextUpdate();

    expect(result.current.response).toEqual(episodeDetails);
    expect(result.current.location).toEqual(episodeDetails.location.url);
    expect(result.current.origin).toEqual(episodeDetails.origin.url);
  });
  test("useAxios should display error ", async () => {
    const id = 1;
    const mock = new MockAdapter(axios);
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const mockData = episodeDetails;

    mock.onGet(url).reply(404, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useAxios(id));

    expect(result.current.error).toEqual("");

    await waitForNextUpdate();

    expect(result.current.error).toEqual("Can't fetch data");
  });
});
