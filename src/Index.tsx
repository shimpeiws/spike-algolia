import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import { Search } from './components/InstantSearch';

ReactDOM.render(
  <div>
    <Hello content="hello world" />
    <br />
    <Search indexName="contacts" key="instantSearch" />
  </div>,
  document.getElementById('app')
);
