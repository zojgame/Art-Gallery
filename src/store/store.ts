import { createContext } from 'react';

interface ContextData {
  authorId: number | undefined;
  setAuthorId: React.Dispatch<React.SetStateAction<number | undefined>>;
  locationId: number | undefined;
  setLocationId: React.Dispatch<React.SetStateAction<number | undefined>>;
  title: string | undefined;
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  createdFrom: number | undefined;
  setCreatedFrom: React.Dispatch<React.SetStateAction<number | undefined>>;
  createdTo: number | undefined;
  setCreatedTo: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Context = createContext<ContextData | undefined>(undefined);

export { Context, type ContextData };
