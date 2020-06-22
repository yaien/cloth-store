import { useState, FormEvent } from "react";

export function useForm<T>(data?: T) {
  const [state, setState] = useState(data);

  type Key = keyof T;

  function get(key: Key, type = String) {
    return data && type(data[key]);
  }

  function input(key: Key, type = String) {
    return (e: FormEvent<HTMLInputElement>) => {
      return setState({ ...state, [key]: type(e.currentTarget.value) } as T);
    };
  }

  return {
    get,
    input,
    state,
  };
}

export default useForm;