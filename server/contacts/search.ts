import * as algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex('contacts');

// Search for a first name
index.search('jimmie', (err, res) => {
  console.log(res.hits);
});

// Search for a first name with typo
index.search('jimie', (err, res) => {
  console.log(res.hits);
});

// Search for a company
index.search('california paint', (err, res) => {
  console.log(res.hits);
});

// Search for a first name and a company
index.search('jimmie paint', (err, res) => {
  console.log(res.hits);
});
