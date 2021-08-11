import { useMemo } from "react";
import { Theme } from "../theme";

function useHooks() {
  return useMemo(() => Theme, []);
}

export default useHooks;
