import { useCallback } from "react";
/**
 *
 * @returns {[{getItem: (key: string) => string}, {setItem: (key: string, value: string) => void, clear: () => void}]}
 */
const useStorage = () => {
  const setItem = useCallback((key, value) => {
    if (!key && !value) {
      throw new Error(
        "To use the setItem function from useStorage hook is necessary set the key and value."
      );
    }

    localStorage.setItem(key, value);
  }, []);

  const getItem = useCallback((key) => {
    if (!key) {
      throw new Error(
        "Is necessary pass a key value to get the item saved in storage."
      );
    }
    return localStorage.getItem(key);
  }, []);

  const clear = useCallback(() => {
    return localStorage.clear();
  }, []);

  return [getItem, { setItem, clear }];
};

export default useStorage;
