import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../../../styles/mixins/fonts';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';

export interface ArticleShareProps {
  socialNetworks: {
    icon: string;
    alt: string;
  }[];
}

export const ArticleShare: FC<ArticleShareProps> = ({ socialNetworks }) => {
  return (
    <ShareContainer>
      <ShareWord>Поделиться:</ShareWord>
      <SocialNetworks>
        {socialNetworks.map((item, index) => (
          <SocialNetworkIcon
            key={index}
            style={{ backgroundImage: `url(${item.icon})` }}
          />
        ))}
      </SocialNetworks>
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  border-top: 4px solid rgba(25, 80, 132, 0.2);
  padding-top: 34px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${getMediaquery('sm')} {
    padding-right: 30px;
  }
  ${getMediaquery('lg')} {
    padding-right: 0px;
  }
`;
const ShareWord = styled.p`
  ${getFont('medium')};
  font-size: 18px;
  margin-right: 20px;
`;
const SocialNetworks = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;
const SocialNetworkIcon = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  border: transparent;
`;
