import React, { useMemo } from 'react';
import useDarkMode from 'use-dark-mode';

export const Theme = React.createContext(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { value, enable, disable, toggle } = useDarkMode(false);

  const memoizedProps = useMemo(
    () => ({
      value,
      enable,
      disable,
      toggle,
    }),
    [value, enable, disable, toggle]
  );

  return <Theme.Provider value={memoizedProps}>{children}</Theme.Provider>;
};

export default ThemeProvider;
