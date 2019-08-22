import * as React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('TAVBSTANSR', 'a1fe76ffe66ec4f702a2ae77c4c3a54c');

type Props = {
  indexName: string;
};

export const Search: React.FC<Props> = (props: Props) => (
  <InstantSearch searchClient={searchClient} indexName={props.indexName}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);
