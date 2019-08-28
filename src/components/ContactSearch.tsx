import * as React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  ClearRefinements,
  RefinementList,
  Configure,
  Pagination
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "TAVBSTANSR",
  "a1fe76ffe66ec4f702a2ae77c4c3a54c"
);

type Props = {
  indexName: string;
};

export const ContactSearch: React.FC<Props> = (props: Props) => (
  <div>
    <h2>Hello React InstantSearch</h2>
    <InstantSearch searchClient={searchClient} indexName={props.indexName}>
      <div>
        <ClearRefinements />
        <h2>company</h2>
        <RefinementList attribute="company" />
        <Configure hitsPerPage={8} />
      </div>
      <div>
        <SearchBox />
        <Hits />
        <Pagination />
      </div>
    </InstantSearch>
  </div>
);
