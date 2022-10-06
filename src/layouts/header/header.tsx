import { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../lib/if-prop';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

import { Icon } from '../../components/icon';
import { Search } from '../../components/fields/search';
import { SwitchLanguage } from '../../components/fields/switch-language';
import { Authorization } from '../../content/authorization';

import { CommonIconLinkProps } from '../../types';
import { PageDataProps } from './types';
import { HeaderOverlay } from './header-overlay';
import { HeaderBurger } from './header-burger';

export interface HeaderProps {
  icon: string,
  currentPage: string,
  pages: PageDataProps[],
  authRecoveryLink?: string,
  authGosuslugi?: string,
  authThirdPartyLinks?: CommonIconLinkProps[],
}

export function Header({
  icon,
  currentPage,
  pages,
  authRecoveryLink,
  authGosuslugi,
  authThirdPartyLinks
}: HeaderProps) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const onBurgerBtnClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const onWrapperClick = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target;
    if ((target as HTMLDivElement).id === 'header-wrapper') {
      setIsMenuOpened(false);
    }
  };

  const handleEscKeyUp = useCallback(
    (evt: KeyboardEvent) => {
      const isEsc = evt.key === 'Escape';

      if (!isEsc) return;

      evt.stopPropagation();
      evt.preventDefault();
      setIsMenuOpened(false);
    },
    [setIsMenuOpened]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEscKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleEscKeyUp, false);
    };
  }, [handleEscKeyUp]);

  const renderPagesList = () => {
    return (pages.map(page => (
      <PagesListItem key={page.name}>
        <PagesListLink href={page.link} active={page.active}>
          {page.name}
        </PagesListLink>
      </PagesListItem>
    )));
  };

  return (
    <PageHeader>
      <Logo>
        <LogoIcon icon={icon} />
        <LogoText>Экосистема городских сервисов</LogoText>
      </Logo>

      <CurrentPage>{currentPage}</CurrentPage>

      <HeaderOverlay
        id='header-wrapper'
        opened={isMenuOpened}
        onClick={onWrapperClick}
      >
        <WrapperContent opened={isMenuOpened}>
          <CurrentPageMobile>{currentPage}</CurrentPageMobile>

          <MainNav>
            <HeaderSearch />

            <PagesList>
              {renderPagesList()}
            </PagesList>

            <HeadLangSwitcher name='header-language-switch' secondary />
            <AuthBtnWrap>
              <AuthBlock
                formId='auth-form'
                recoveryLink={authRecoveryLink}
                gosuslugiAuth={authGosuslugi}
                thirdPartyLinks={authThirdPartyLinks}
              />
            </AuthBtnWrap>
          </MainNav>
        </WrapperContent>
        <BurgerBtn opened={isMenuOpened} onBurgerClick={onBurgerBtnClick} />
      </HeaderOverlay>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 15px;

  ${getMediaquery('lg')} {
    padding: 20px 30px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: start;
  max-width: 170px;
  margin-right: 20px;

  ${getMediaquery('lg')} {
    margin-right: 130px;
  }
`;

const LogoIcon = styled(Icon)`
  width: 41px;
  height: 43px;

  ${getMediaquery('lg')} {
    width: 50px;
    height: 51px;
    margin-right: 15px;
  }
`;

const LogoText = styled.span`
  font-family: var(--font-families-gilroy);
  font-weight: 600;
  font-size: 0;
  color: var(--colors-darkblue);

  ${getMediaquery('lg')} {
    font-size: 16px;
    line-height: 18px;
  }
`;

const CurrentPage = styled.b`
  display: inline-block;
  margin-right: auto;
  padding: 15px 23px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-blue);
  border-radius: 100px;
  background-color: var(--colors-white);

  ${getMediaquery('lg')} {
    flex-shrink: 0;
    margin-right: 40px;
    border: 2px solid var(--colors-blue);
    background-color: transparent;
  }
`;

interface WrapperContentProps {
  opened?: boolean,
}

const WrapperContent = styled.div<WrapperContentProps>`
  display: ${ifProp('opened', 'flex', 'none')};
  flex-direction: column;
  height: 100%;

  ${getMediaquery('lg')} {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

const BurgerBtn = styled(HeaderBurger)`
  position: ${ifProp('opened', 'absolute', 'static')};
  top: 25px;
  right: 25px;

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const CurrentPageMobile = styled(CurrentPage)`
  margin-bottom: 35px;
  background-color: var(--colors-blue);
  color: var(--colors-white);

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const MainNav = styled.nav`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  ${getMediaquery('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 1fr 45px;
  }

  ${getMediaquery('lg')} {
    display: flex;
    align-items: center;
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`;

const HeaderSearch = styled(Search)`
  ${getMediaquery('sm')} {
    grid-area: 1 / 1 / 2 / 3;
  }

  ${getMediaquery('lg')} {
    flex-grow: 1;
    max-width: 540px;
  }
`;

const PagesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${getMediaquery('sm')} {
    grid-area: 2 / 1 / 3 / 3;
  }

  ${getMediaquery('lg')} {
    order: -1;
    display: flex;
    align-items: center;
    margin-right: 130px;
  }
`;

const PagesListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;

interface PagesListLinkProps {
  active?: boolean,
}

const PagesListLink = styled.a<PagesListLinkProps>`
  display: inline-block;
  padding: 13px 25px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  border-radius: 20px;

  ${ifProp(
    'active',
    css`
      color: var(--colors-white);
      background-color: var(--colors-blue);
    `,
    css`
      color: var(--colors-blue);
      background-color: transparent;
    `,
  )}

  ${getMediaquery('lg')} {
    padding: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border-radius: 0;
    background-color: transparent;

    ${ifProp(
      'active',
      css`
        color: var(--colors-darkblue);
      `,
      css`
        color: var(--colors-blue);
      `,
    )}
  }
`;

const HeadLangSwitcher = styled(SwitchLanguage)`
  align-self: center;

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const AuthBtnWrap = styled.div`
  ${getMediaquery('lg')} {
    margin-left: auto;
  }
`;

const AuthBlock = styled(Authorization)`
  left: -65px;

  ${getMediaquery('md')} {
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 65px/2), -50%);
  }
`;
