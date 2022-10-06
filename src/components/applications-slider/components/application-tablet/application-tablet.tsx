import { FC } from 'react';
import styled from '@emotion/styled';

import { Button } from '../../../button';

export const ApplicationTablet: FC = ({ children }) => {
  return (
    <TabletApplication>
      {children}
      <Button>Показать еще</Button>
    </TabletApplication>
  );
};

const TabletApplication = styled.div`
  display: flex;
  justify-content: center;
  max-width: 768px;
  flex-wrap: wrap;
  margin-bottom: 76px;
`;
