import { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { breakpoints } from '../../../../utils/constants';
import { getMediaquery } from '../../../../styles/mixins/mediaqueries';
import { switchProp } from '../../../../lib/switch-prop';

import { If } from '../../../shared/if';

import { AppMetaInfoProps } from '../types';

export interface CardDetailedMetaInfoListProps {
  appDetails: AppMetaInfoProps,
  opened: boolean,
}

export function CardDetailedMetaInfoList({ appDetails, opened }: CardDetailedMetaInfoListProps) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isAndroid = 'android' in appDetails.compability;
  const isIOS = 'ios' in appDetails.compability;
  const hasPermissionLink = 'permissionsLink' in appDetails;
  const hasReportLink = 'reportLink' in appDetails;
  const hasTel = 'tel' in appDetails.contacts;
  const hasWebsite = 'website' in appDetails.contacts;
  const hasEmail = 'email' in appDetails.contacts;
  const hasLegalAddress = 'legalAddress' in appDetails;
  const isMobile = width < breakpoints.tablet;
  const isTablet = width >= breakpoints.tablet && width < breakpoints.desktop;
  const isDesktop = width >= breakpoints.desktop;

  const mobileAppDetails = <>
    <InfoListItem>
      <InfoListItemName>Текущая версия</InfoListItemName>
      <InfoListItemValue>{appDetails.currentVer}</InfoListItemValue>
    </InfoListItem>
    <InfoListItem>
      <InfoListItemName>Обновлено</InfoListItemName>
      <InfoListItemValue>{appDetails.updateDate}</InfoListItemValue>
    </InfoListItem>
  </>;

  const mobileTabletTransitionalFragment = <>
    <InfoListItem>
      <InfoListItemName>Размер</InfoListItemName>
      <InfoListItemValue>{appDetails.size}</InfoListItemValue>
    </InfoListItem>
  </>;

  const tabletDesktopTransitionalFragment = <>
    <InfoListItem>
      <InfoListItemName>Установок</InfoListItemName>
      <InfoListItemValue>{appDetails.installs}</InfoListItemValue>
    </InfoListItem>
  </>;

  const desktopAppDetailsExtra = <>
    <InfoListItem>
      <InfoListItemName>Совместимость</InfoListItemName>
      <If condition={isAndroid}>
        <InfoListItemValue>{appDetails.compability.android}</InfoListItemValue>
      </If>
      <If condition={isIOS}>
        <InfoListItemValue>{appDetails.compability.ios}</InfoListItemValue>
      </If>
    </InfoListItem>
    <InfoListItem>
      <InfoListItemName>Разработчик</InfoListItemName>
      <InfoListItemLink href={appDetails.developer.link}>{appDetails.developer.name}</InfoListItemLink>
    </InfoListItem>
    <InfoListItem>
      <InfoListItemName>Разрешения</InfoListItemName>
      <If condition={hasPermissionLink}>
        <InfoListItemLink href={appDetails.permissionsLink}>Подробнее</InfoListItemLink>
      </If>
    </InfoListItem>
    <InfoListItem>
      <InfoListItemName>Отчёт</InfoListItemName>
      <If condition={hasReportLink}>
        <InfoListItemLink href={appDetails.reportLink}>Пожаловаться</InfoListItemLink>
      </If>
    </InfoListItem>
    <InfoListItem finalOrder='penultimate'>
      <InfoListItemName>Контакты</InfoListItemName>
      <If condition={hasTel}>
        <InfoListItemLink href={ `tel:${appDetails.contacts.tel}` }>{appDetails.contacts.tel}</InfoListItemLink>
      </If>
      <If condition={hasWebsite}>
        <InfoListItemLink href={appDetails.contacts.website}>{appDetails.contacts.website}</InfoListItemLink>
      </If>
      <If condition={hasEmail}>
        <InfoListItemLink href={`email:${appDetails.contacts.email}`}>{appDetails.contacts.email}</InfoListItemLink>
      </If>
    </InfoListItem>
    <InfoListItem finalOrder='last'>
      <InfoListItemName>Юридический адрес</InfoListItemName>
      <If condition={hasLegalAddress}>
        <InfoListItemValue>{appDetails.legalAddress}</InfoListItemValue>
      </If>
    </InfoListItem>
    <InfoListItem>
      <InfoListItemName>Относится к ролям</InfoListItemName>
      {appDetails.roles.map(role => (
        <InfoListItemLink key={role.roleName} href={role.link}>{role.roleName}</InfoListItemLink>
      ))}
    </InfoListItem>
  </>;

  const renderAppDetails = () => {
    if (isMobile) {
      return mobileAppDetails;
    } else if (isTablet) {
      return <>
        {mobileAppDetails}
        {mobileTabletTransitionalFragment}
      </>;
    } else if (isDesktop) {
      return <>
        {mobileAppDetails}
        {mobileTabletTransitionalFragment}
        {tabletDesktopTransitionalFragment}
      </>;
    }
  };

  const renderAppDetailsExtra = () => {
    if (isMobile) {
      return <>
        {mobileTabletTransitionalFragment}
        {tabletDesktopTransitionalFragment}
        {desktopAppDetailsExtra}
      </>;
    } else if (isTablet) {
      return <>
        {tabletDesktopTransitionalFragment}
        {desktopAppDetailsExtra}
      </>;
    } else if (isDesktop) {
      return desktopAppDetailsExtra;
    }
  };

  return (
    <InfoList>
      {renderAppDetails()}
      <If condition={opened}>
        {renderAppDetailsExtra()}
      </If>
    </InfoList>
  );
}

const InfoList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  align-items: start;
  padding: 40px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--colors-darkblue);
    opacity: 0.1;
  }

  ${getMediaquery('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  ${getMediaquery('lg')} {
    grid-template-columns: repeat(4, 1fr);
    padding: 40px 0;
  }
`;

interface InfoListItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  finalOrder?: 'last' | 'penultimate',
}

const InfoListItem = styled.div<InfoListItemProps>`
  display: flex;
  flex-direction: column;

  ${getMediaquery('md')} {
    ${switchProp('finalOrder', {
      last: css`
        order: 2;
      `,
      penultimate: css`
        order: 1;
      `,
    })}
  }
`;

const infoBase = css`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  color: var(--colors-darkblue);
`;

const InfoListItemName = styled.span`
  margin-bottom: 10px;
  ${infoBase};
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;

  ${getMediaquery('md')} {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 18px;
  }
`;

const infoValuesBase = css`
  ${infoBase};
  font-size: 14px;
  line-height: 16px;

  ${getMediaquery('md')} {
    font-size: 20px;
    line-height: 23px;
  }
`;

const InfoListItemValue = styled.span`
  ${infoValuesBase};
`;

const InfoListItemLink = styled.a`
  ${infoValuesBase};
  transition: color 0.3s linear, opacity 0.3s linear;

  &:hover {
    color: var(--colors-pink);
    opacity: 0.6;
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
