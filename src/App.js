import React, { useState } from 'react';
import Layout from './hoc/Layout/Layout';
import Catalog from './components/Catalog/Catalog';

import { getProducts } from './services';
const App = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const searchHandler = () => getProducts({ query, setProducts });

  const queryHandler = (query) => setQuery(query);

  return (
    <Layout
      query={query}
      searchHandler={searchHandler}
      queryHandler={queryHandler}
      number={products.length}
    >
      <Catalog
        products={products}
      />
    </Layout>
  );
}


export default App;
