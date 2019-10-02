import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error('error found');
  } //if close

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
