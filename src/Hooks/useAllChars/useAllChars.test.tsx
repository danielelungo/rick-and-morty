import { renderHook } from "@testing-library/react-hooks";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiUrl } from "../../Constants/url";
import { allCharData } from "../../__mocks__/allCharData";
import useAllChars from "./useAllChars";

const id = 1;
const url = `${apiUrl}/character/?page=${id}`;

describe("useAllchars", () => {
  test("useAllchars performs GET request", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(200, allCharData);

    const { result, waitForNextUpdate } = renderHook(() => useAllChars(id));

    expect(result.current.data).toEqual([]);
    expect(result.current.numPages).toEqual(0);

    await waitForNextUpdate();

    expect(result.current.data).toEqual(allCharData.results);
    expect(result.current.numPages).toEqual(allCharData.info.pages);
  });
  test("useAllChars should display error ", async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(url).reply(404, allCharData);

    const { result, waitForNextUpdate } = renderHook(() => useAllChars(id));

    expect(result.current.error).toEqual("");

    await waitForNextUpdate();

    expect(result.current.error).toEqual("Can't fetch data");
  });
});
