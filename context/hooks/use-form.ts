import { useState, FormEvent } from "react";

export function useForm<T>(data?: T) {
  const [state, setState] = useState(data);

  type Key = keyof T;

  function get(key: Key, type = String) {
    return state ? type(state[key] ?? "") : type("");
  }

  function input(key: Key, type = String) {
    return (e: FormEvent<HTMLInputElement>) => {
      return setState({ ...state, [key]: type(e.currentTarget.value) } as T);
    };
  }

  function set(update: Partial<T>) {
    setState({ ...state, ...(update as T) });
  }

  return {
    get,
    input,
    set,
    state,
    setState,
  };
}

export default useForm;
