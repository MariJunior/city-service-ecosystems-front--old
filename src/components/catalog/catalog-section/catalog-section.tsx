import { FC } from 'react';
import styled from '@emotion/styled';

import { CatalogCards, CatalogCardsProps } from '../catalog-cards';
import { CatalogHeader, CatalogHeaderProps } from '../catalog-header';

export type CatalogSectionProps = CatalogCardsProps & CatalogHeaderProps;

export const CatalogSection: FC<CatalogSectionProps> = ({
  catalogCards,
  roles,
}) => {
  return (
    <Catalog>
      <CatalogHeader roles={roles} foundApps={catalogCards.length} />
      <CatalogCards catalogCards={catalogCards} />
    </Catalog>
  );
};

const Catalog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
