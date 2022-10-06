export interface AppLinkProps {
  link: string,
  content: React.ReactNode,
}

export type AppMetaInfoProps = {
  currentVer: string,
  updateDate: string,
  size: string,
  installs: string,
  compability: {
    android?: string,
    ios?: string,
  },
  developer: {
    name: string,
    link?: string,
  },
  permissionsLink?: string,
  reportLink?: string,
  contacts: {
    tel?: string,
    website?: string,
    email?: string,
  },
  legalAddress?: string,
  roles: {
    roleName: string,
    link: string,
  }[],
}
