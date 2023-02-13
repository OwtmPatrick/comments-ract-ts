import { Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';

import { RootModel, initialState } from './models/Root';

const RootStoreContext = createContext<null | RootInstance>(null);

export const rootStore = initialState;
export type RootInstance = Instance<typeof RootModel>;
export const { Provider } = RootStoreContext;
export function useStore(): typeof rootStore {
  const store = useContext(RootStoreContext);

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return store;
}
