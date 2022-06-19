import React, { ReactNode } from 'react';

import { Row as StyledRow } from './styled';

type RowProps = {
  children: ReactNode;
};

export const Row = ({ children }: RowProps) => {
  return <StyledRow>{children}</StyledRow>;
};
