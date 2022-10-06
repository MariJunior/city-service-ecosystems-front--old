import { FC } from 'react';
import styled from '@emotion/styled';

import { SocialRoles } from './components/social-roles';
import { SocialRoleProps } from './types';

import { getMediaquery, getFont, fontColors } from '../../../styles';

export interface CatalogHeaderProps {
  roles: SocialRoleProps[];
  foundApps?: number;
}

export const CatalogHeader: FC<CatalogHeaderProps> = ({ roles, foundApps }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Приложения</Title>
        <FoundApps>Найдено {foundApps}</FoundApps>
      </Header>
      <SocialRoles roles={roles} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 904px;
`;
const Header = styled.div`
  display: flex;
  align-self: flex-start;

  ${getMediaquery('sm')} {
    margin-bottom: 20px;
  }
  ${getMediaquery('md')} {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  ${getFont('titleLg')};
  margin-right: 30px;

  ${getMediaquery('sm')} {
    font-size: 30px;
  }
  ${getMediaquery('md')} {
    font-size: 40px;
  }
`;
const FoundApps = styled.p`
  ${getFont('medium')};
  opacity: 0.5;
  color: ${fontColors.chathamsBlue};
  align-self: flex-end;
`;
