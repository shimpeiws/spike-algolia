import * as React from "react";
import { Highlight } from "react-instantsearch-dom";

// TODO: Type to hit
type Props = {
  hit: any;
};

export const IkeaProduct: React.FC<Props> = (props: Props) => (
  <div>
    <img src={props.hit.image} alt={props.hit.name} width="100px" />
    <div className="hit-name">
      <Highlight attribute="name" hit={props.hit} />
    </div>
    <div className="hit-category">
      <Highlight attribute="category" hit={props.hit} />
    </div>
    <div className="hit-description">
      <Highlight attribute="description" hit={props.hit} />
    </div>
    <div className="hit-price">${props.hit.price}</div>
  </div>
);
