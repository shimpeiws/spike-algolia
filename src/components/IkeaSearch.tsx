import * as React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure
} from "react-instantsearch-dom";
import { IkeaProduct } from "./IkeaProduct"

type Props = {
  indexName: string;
};

const searchClient = algoliasearch(
  "TAVBSTANSR",
  "a1fe76ffe66ec4f702a2ae77c4c3a54c"
);

export const IkeaSearch: React.FC<Props> = (props: Props) => (
  <div className="ais-InstantSearch">
    <h2>Search from Ikea Products</h2>
    <InstantSearch searchClient={searchClient} indexName={props.indexName}>
      <div className="left-panel">
        <ClearRefinements />
        <h2>Category</h2>
        <RefinementList attribute="category" />
        <Configure hitsPerPage={8} />
      </div>
      <div className="right-panel">
        <SearchBox />
        <Hits hitComponent={IkeaProduct} />
        <Pagination />
      </div>
    </InstantSearch>
  </div>
);
