/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useContext } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";
import { History, Update } from "history";

const useBackListener = (callback: (...args: any) => void) => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as History;

  useEffect(() => {
    const listener = ({ location, action }: Update) => {
      if (action === "POP") {
        callback({ location, action });
      }
    };

    const unlisten = navigator.listen(listener);
    return unlisten;
  }, [callback, navigator]);
};

export default useBackListener;
