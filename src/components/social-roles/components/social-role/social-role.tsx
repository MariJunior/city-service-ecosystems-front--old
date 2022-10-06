import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { SocialButtonProps } from '../../social-roles';

import { switchProp } from '../../../../lib/switch-prop';
import iconTooltip from '../../../../assets/social-icons-main/tooltip-icon.svg';
import { fontColors } from '../../../../styles/mixins/colors';

export const SocialRole: FC<SocialButtonProps> = ({
  title,
  icon,
  tooltip,
  href,
  variant,
}) => {
  return (
    <SocialButton type={variant} href={href}>
      <Icon src={icon} alt={'social-icon.svg'} />
      <SocialButtonTitle>{title}</SocialButtonTitle>
      <Tooltip>
        <TooltipIcon src={iconTooltip} alt='tooltip-icon' />
        <div style={{ marginBottom: '3px' }}>
          <TooltipText>{tooltip?.title}</TooltipText>
        </div>

        <TooltipText>{tooltip?.text}</TooltipText>
      </Tooltip>
    </SocialButton>
  );
};

const SocialButton = styled.a`
  position: relative;
  height: 51px;
  margin-right: 15px;
  margin-bottom: 16px;
  text-decoration: none;
  ${switchProp('type', {
    primary: css`
      color: #fff;
      background: ${fontColors.cornFlowerBlue};
    `,
    secondary: css`
      color: #fff;
      background: ${fontColors.lightSlateBlue};
    `,
  })}
  cursor: pointer;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  padding: 0 23px 0 23px;
  border-radius: 100px;
  fonts-size: 16px;

  &:hover {
    & > div {
      display: block;
    }
  }

  &:hover:last-child {
    & div {
      display: none;
    }
  }

  :nth-of-type(2) {
    margin-left: 15px;
  }

  :nth-of-type(7) {
    margin-left: 24px;
    margin-right: 0;
  }

  :nth-of-type(12) {
    margin-right: 0;
  }
  :nth-of-type(n + 7) {
    margin-right: 13px;
  }
  :nth-of-type(n + 13) {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

const Tooltip = styled.div`
  display: none;
  width: 329px;
  box-sizing: border-box;
  position: absolute;
  left: 90%;
  top: 26px;
  padding: 20px 20px 20px 45px;
  border-radius: 20px;
  background: ${fontColors.white};
  z-index: 50;
`;

const TooltipIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const TooltipText = styled.p`
  color: ${fontColors.navyBlue};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.16px;
  margin: 0;
`;

const Icon = styled.img`
  margin-right: 11px;
`;

const SocialButtonTitle = styled.p`
  position: relative;
`;
