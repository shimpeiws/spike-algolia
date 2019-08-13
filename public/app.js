// Replace with your own values
const searchClient = algoliasearch(
  'TAVBSTANSR',
  'a1fe76ffe66ec4f702a2ae77c4c3a54c' // search only API key, not admin API key
);

const search = instantsearch({
  indexName: 'contacts',
  searchClient,
  routing: true
});

search.addWidget(
  instantsearch.widgets.configure({
    hitsPerPage: 10
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for contacts'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: `We didn't find any results for the search <em>"{{query}}"</em>`
    }
  })
);

search.start();
