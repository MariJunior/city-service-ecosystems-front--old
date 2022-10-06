import { FC } from 'react';
import styled from '@emotion/styled';

import { SocialRole } from './components/social-role/social-role';

import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface SocialButtonProps {
  title: string;
  href?: string;
  icon: string;
  tooltip?: {
    title: string;
    text: string;
  };
  variant: 'primary' | 'secondary';
}

export interface SocialRolesProps {
  socialRolesArray: SocialButtonProps[];
}

export const SocialRoles: FC<SocialRolesProps> = ({ socialRolesArray }) => {
  const renderSocialRoleButtons = () => {
    return socialRolesArray.map((item, index) => (
      <SocialRole
        key={index}
        href={item.href}
        tooltip={item.tooltip}
        title={item.title}
        icon={item.icon}
        variant={item.variant}
      />
    ));
  };
  return (
    <SocialRolesWrapper>
      <SocialRolesRow>{renderSocialRoleButtons()}</SocialRolesRow>
    </SocialRolesWrapper>
  );
};

const SocialRolesWrapper = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`;
const SocialRolesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  :nth-of-type(2) {
    padding-left: 45px;
  }
  :nth-of-type(3) {
    margin-bottom: 0;
  }
`;
