import React from 'react';

import { CommonIconProps } from '../../types';

export interface IconProps extends CommonIconProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  icon: string;
}

export function Icon({ icon, alt = '', ...props }: IconProps) {
  return <img src={icon} alt={alt} {...props} />;
}
