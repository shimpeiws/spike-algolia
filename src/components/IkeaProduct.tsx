import * as React from "react";
import {
  Highlight
} from "react-instantsearch-dom";

type Props = {
  hit: any
};

export const IkeaProduct: React.FC<Props> = (props: Props) => (
  <div>
    <img src={props.hit.image} alt={props.hit.name} />
    <div className="hit-name">
      <Highlight attribute="name" hit={props.hit} />
    </div>
    <div className="hit-description">
      <Highlight attribute="description" hit={props.hit} />
    </div>
    <div className="hit-price">${props.hit.price}</div>
  </div>
);
