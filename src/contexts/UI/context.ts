import { createContext } from 'react';

import UIContextType from 'src/types/UIContext.type';

const contextDefaultValues: UIContextType = {
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
};

export const UIContext = createContext<UIContextType>(contextDefaultValues);
