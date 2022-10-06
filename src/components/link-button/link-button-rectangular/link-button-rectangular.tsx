import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifNotProp} from '../../../lib/if-not-prop';

import { ReactComponent as GoogleIconColor } from '../../../icons/google-play-icon-color.svg';
import { ReactComponent as GoogleIconMono } from '../../../icons/google-play-icon-mono.svg';
import { ReactComponent as GoogleType } from '../../../icons/google-play-type.svg';
import { ReactComponent as AppStoreIcon } from '../../../icons/app-store-icon.svg';
import { ReactComponent as AppStoreType } from '../../../icons/app-store-type.svg';
import { ReactComponent as DownloadType } from '../../../icons/download-in-type.svg';

export interface LinkButtonRectangularProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  link: string,
  platform: 'appstore' | 'google',
  secondary?: boolean,
  fullIcon?: boolean,
}

export function LinkButtonRectangular({
  link,
  platform,
  secondary,
  fullIcon,
  ...props
}: LinkButtonRectangularProps) {
  const isApple = platform === 'appstore';
  const isGoogle = platform === 'google';
  const isFullColorGoogle = isGoogle && fullIcon ? true : false;

  const renderPlatformIcon = () => {
    if (isApple) {
      return <AppStoreIcon />;
    } else if (isGoogle) {
      return fullIcon ? <GoogleIconColor /> : <GoogleIconMono />;
    }
  };

  const renderPlatformType = () => {
    if (isApple) {
      return fullIcon ? <><DownloadType /><AppStoreType /></> : <AppStoreType />;
    } else if (isGoogle) {
      return <GoogleType />;
    }
  };

  return (
    <Link
      href={link}
      secondary={secondary}
      {...props}
    >
      <IconWrapper secondary={secondary} fullColor={isFullColorGoogle}>
        {renderPlatformIcon()}
      </IconWrapper>
      <TypeWrapper secondary={secondary}>
        {renderPlatformType()}
      </TypeWrapper>
    </Link>
  );
}

interface LinkProps {
  secondary?: boolean,
}

const Link = styled.a<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 2px solid;
  border-radius: 10px;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.6;
  }

  ${ifNotProp(
    'secondary',
    css`
      border-color: #B5DEFF;
      background-color: var(--colors-white);
    `,
    css`
      border-color: var(--colors-lightgrey);
      background-color: var(--colors-lightgrey);
    `
  )};
`;

interface WrappersBasicProps {
  secondary?: boolean,
}

interface IconWrapperProps extends WrappersBasicProps {
  fullColor?: boolean,
}

const IconWrapper = styled.span<IconWrapperProps>`
  margin-right: 6px;

  ${ifNotProp(
    'fullColor',
    ifNotProp(
      'secondary',
      css`
        path {
          fill: #B5DEFF;
        }
      `,
      css`
        path {
          fill: #A3A7B7;
        }
      `
    )
  )}
`;

const TypeWrapper = styled.span<WrappersBasicProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3px;

  ${ifNotProp(
    'secondary',
    css`
      path {
        fill: #B5DEFF;
      }
    `,
    css`
      path {
        fill: #A3A7B7;
      }
    `
  )};
`;
