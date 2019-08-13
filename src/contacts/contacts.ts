import * as algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex('contacts');
const contactsJSON = require('./contacts.json');

index.addObjects(contactsJSON, (err, content) => {
  if (err) {
    console.error(err);
  }
  console.info('imported!');
});

index.setSettings(
  {
    customRanking: ['desc(followers)'],
    searchableAttributes: ['lastname', 'firstname', 'company', 'email', 'city', 'address']
  },
  (err, content) => {
    console.log(content);
  }
);
