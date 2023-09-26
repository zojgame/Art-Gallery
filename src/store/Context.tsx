import { useState, useMemo } from 'react';
import { Context } from './store';

interface ContextComponentProps {
  children: JSX.Element;
}

function ContextProvider({ children }: ContextComponentProps) {
  const [author, setAuthor] = useState<string | undefined>(undefined);

  const contextValue = useMemo(
    () => ({ author, setAuthor }),
    [author, setAuthor],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { ContextProvider };
