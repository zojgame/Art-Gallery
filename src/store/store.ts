import { createContext } from 'react';

interface ContextData {
  author: number | undefined;
  setAuthor: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Context = createContext<ContextData | undefined>(undefined);

export { Context, type ContextData };
