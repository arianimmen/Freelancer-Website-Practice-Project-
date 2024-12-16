import { useEffect, useState } from "react";

export default function useLocalStorage({ key, initialState }) {
  const [value, setValue] = useState(() => {
    const local = JSON.parse(localStorage.getItem(key));
    return local == undefined ? initialState : local;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
