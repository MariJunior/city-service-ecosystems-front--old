import styled from '@emotion/styled';

import { prop } from '../../lib/prop';

export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  children: React.ReactNode;
}

export function Flex(props: FlexProps) {
  return (
    <Wrapper {...props} />
  );
}

const Wrapper = styled.div<FlexProps>`
  display: flex;
  align-items: ${prop('align')};
  justify-content: ${prop('justify')};
  flex-direction: ${prop('direction')};
`;
