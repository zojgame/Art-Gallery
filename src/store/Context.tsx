import { useState, useMemo } from 'react';
import { Context } from './store';

interface ContextComponentProps {
  children: JSX.Element;
}

function ContextProvider({ children }: ContextComponentProps) {
  const [authorId, setAuthorId] = useState<number | undefined>(undefined);
  const [locationId, setLocationId] = useState<number | undefined>(undefined);

  const contextValue = useMemo(
    () => ({
      authorId,
      setAuthorId,
      locationId,
      setLocationId,
    }),
    [authorId, setAuthorId, locationId, setLocationId],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { ContextProvider };
