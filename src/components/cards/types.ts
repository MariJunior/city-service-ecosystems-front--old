export interface AppCardBasicProps {
  appIcon: string,
  appName: React.ReactNode,
  appRating?: number,
}

export interface AppCardMiniBasicProps extends AppCardBasicProps {
  appName: string,
}
