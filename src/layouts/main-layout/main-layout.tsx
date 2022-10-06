import styled from '@emotion/styled';

import { If } from '../../components/shared/if';

import { getMediaquery } from '../../styles/mixins/mediaqueries';

export interface MainLayoutProps {
  header: React.ReactElement,
  footer: React.ReactElement,
  children: React.ReactNode;
  sidebar?: React.ReactElement,
}

export function MainLayout({ header, footer, children, sidebar }: MainLayoutProps) {
  return (
    <>
      {header}
      <Content>
        <If condition={!!sidebar} elseChildren={children}>
          <ContentWithAsideWrapper>
            {children}
            {sidebar}
          </ContentWithAsideWrapper>
        </If>
      </Content>
      {footer}
    </>
  );
}

const Content = styled.main`
  margin-top: 45px;
  margin-right: auto;
  margin-left: auto;

  ${getMediaquery('lg')} {
    margin-top: 100px;
    max-width: calc(var(--breakpoints-lg) - 40px);
  }
`;

const ContentWithAsideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
