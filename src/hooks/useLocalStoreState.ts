import { useState } from 'react';

interface HookProps<T> {
  defaultState: T;
  storageKey: string;
}

export function useLocalStoreState<T>({ defaultState, storageKey }: HookProps<T>) {
  const [state, setState] = useState(getInitialState());

  function updateState(newState: T) {
    updateStorageState(newState);
    setState(newState);
  }

  function getInitialState() {
    const storedState = getStorageState();

    return storedState || defaultState;
  }

  function updateStorageState(newState: T) {
    localStorage.setItem(storageKey, JSON.stringify(newState));
  }

  function getStorageState() {
    try {
      const storedState = localStorage.getItem(storageKey);

      if (!storedState) {
        return null;
      }

      return JSON.parse(storedState) as T;
    } catch {
      console.error('Error parsing local storage state for key:', storageKey);
      return null;
    }
  }

  return { state, updateState };
}
