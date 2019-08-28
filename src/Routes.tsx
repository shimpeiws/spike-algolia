import * as React from 'react';
import { Switch } from 'react-router';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';
import { Home } from './components/Home';
import { Search } from './components/InstantSearch';
import { IkeaSearch } from './components/IkeaSearch';

export class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>spike-algolia</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ikea-products">Search from Ikea Products</Link>
        </li>
        <li>
          <Link to="/contacts">Search from contacts</Link>
        </li>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ikea-products" component={IkeaSearch} />
          <Route
            exact
            path="/contacts"
            render={props => <Search indexName="contacts" {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
