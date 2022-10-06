import React from 'react';
import './App.css';

import { CatalogSection } from './components/catalog';
import { CATALOG_CARDS_ARRAY } from './components/catalog/catalog-cards/data';
import { MAIN_SOCIAL_BTNS_ARRAY } from './components/catalog/catalog-header/data';
function App() {
  return (
    <CatalogSection
      roles={MAIN_SOCIAL_BTNS_ARRAY}
      catalogCards={CATALOG_CARDS_ARRAY}
    />
  );
}

export default App;
