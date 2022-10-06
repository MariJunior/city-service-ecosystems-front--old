import { CommonIconLinkProps } from '../../types';

export interface AuthFormBaseProps {
  formId: string,
  recoveryLink?: string,
  gosuslugiAuth?: string,
  thirdPartyLinks?: CommonIconLinkProps[],
}
