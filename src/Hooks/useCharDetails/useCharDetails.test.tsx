import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiUrl } from "../../Constants/url";
import { episodeDetails } from "../../__mocks__/episodeDetails";
import useCharDetails from "./useCharDetails";

const id = 1;
const url = `${apiUrl}/character/${id}`;

describe("useCharDetails", () => {
  test("useCharDetails performs GET request", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(200, episodeDetails);

    const { result, waitForNextUpdate } = renderHook(() => useCharDetails(id));

    expect(result.current.response).toEqual(undefined);
    expect(result.current.location).toEqual("");
    expect(result.current.origin).toEqual("");

    await waitForNextUpdate();

    expect(result.current.response).toEqual(episodeDetails);
    expect(result.current.location).toEqual(episodeDetails.location.url);
    expect(result.current.origin).toEqual(episodeDetails.origin.url);
  });
  test("useCharDetails should display error ", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(404, episodeDetails);

    const { result, waitForNextUpdate } = renderHook(() => useCharDetails(id));

    expect(result.current.error).toEqual("");

    await waitForNextUpdate();

    expect(result.current.error).toEqual("Can't fetch data");
  });
});
