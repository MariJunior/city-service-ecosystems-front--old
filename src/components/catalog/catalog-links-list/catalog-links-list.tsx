import { FC } from 'react';
import styled from '@emotion/styled';

import { TabletLink } from '../catalog-cards/types';

import { fontColors, getMediaquery, getFont } from '../../../styles';
import { withProp } from '../../../lib/with-prop';

export interface TabletLinksProps {
  links: TabletLink[];
  mobile: boolean;
  interestedCard: boolean;
}
export const CatalogLinksList: FC<TabletLinksProps> = ({
  links,
  mobile,
  interestedCard,
}) => {
  const renderLinksList = () => {
    if (!mobile) {
      return links.map((item, index) => (
        <Item key={index}>
          <Image src={item.icon} />
          <Link href={item.href}>{item.title}</Link>
        </Item>
      ));
    } else {
      return links.map((item, index) => (
        <Item key={index}>
          {index !== 0 ? (
            <ImageWrapper href={item.href}>
              <Image src={item.icon} />
            </ImageWrapper>
          ) : null}
          <Link href={item.href}>{item.title}</Link>
        </Item>
      ));
    }
  };

  return (
    <>
      {mobile ? (
        <MobileList>{renderLinksList()}</MobileList>
      ) : (
        <List interestedCard={interestedCard}>{renderLinksList()}</List>
      )}
    </>
  );
};

const List = styled.ul<{ interestedCard: boolean }>`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: flex;
  }
  ${getMediaquery('lg')} {
    display: ${withProp('interestedCard', (interestedCard) =>
      interestedCard ? 'flex' : 'none'
    )};
  }
`;
const MobileList = styled.ul`
  padding: 0;
  margin: 0;
  ${getMediaquery('sm')} {
    display: flex;
  }
  ${getMediaquery('md')} {
    display: none;
  }
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 13px 7px 0;
  ${getMediaquery('sm')} {
    margin: 0 10px 0 0;
    max-width: 30px;
    :nth-of-type(1) {
      flex-basis: 100%;
      max-width: 100%;
    }
    :nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  ${getMediaquery('md')} {
    max-width: 100%;
    :nth-of-type(1) {
      flex-basis: 0;
    }
    margin: 0 13px 7px 0;
  }
`;
const Image = styled.img`
  ${getMediaquery('sm')} {
    width: 16px;
    height: 20px;
  }
  ${getMediaquery('md')} {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;
const ImageWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #1b8eff;
  border-radius: 5px;
  cursor: pointer;
`;
const Link = styled.a`
  ${getFont('medium')}
  color: ${fontColors.dodgerBlue};
  line-height: 18px;
  text-decoration: none;

  ${getMediaquery('sm')} {
    :nth-child(1) {
      display: flex;
      width: 100%;
      flex: 1;
      background: #1b8eff;
      color: white;
      padding: 10px 10px 10px 10px;
      border-radius: 10px;
      justify-content: center;
    }
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
  }
`;
