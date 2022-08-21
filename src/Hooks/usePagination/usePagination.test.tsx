import { renderHook, act } from "@testing-library/react-hooks";
import usePagination from "./usePagination";

describe("usePagination", () => {
  test("should increment page from initial page value", () => {
    const { result } = renderHook(() => usePagination(9000));

    act(() => {
      result.current.nextPageHandler();
    });

    expect(result.current.page).toBe(9001);
  });
  test("should decrement page from initial page value", () => {
    const { result } = renderHook(() => usePagination(9000));

    act(() => {
      result.current.prevPageHandler();
    });

    expect(result.current.page).toBe(8999);
  });
  test("shouldn't decrement page if page value is one", () => {
    const { result } = renderHook(() => usePagination(1));

    act(() => {
      result.current.prevPageHandler();
    });

    expect(result.current.page).toBe(1);
  });
});
