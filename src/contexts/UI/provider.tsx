/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { useState } from 'react';

import { UIContext } from './context';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export function UIProvider(props: Props) {
  const { children } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const value = {
    isDrawerOpen,
    setIsDrawerOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
