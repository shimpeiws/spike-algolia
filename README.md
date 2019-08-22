## Spike in server-side using ts-node

Create index and import contact data
`yarn server:index`

```
% yarn server:index                                                                                                                                         [21:35:39]
yarn run v1.10.1
$ npx ts-node --project ./server/tsconfig.json ./server/contacts/contacts.ts
{ updatedAt: '2019-08-22T12:35:52.362Z', taskID: 765019862 }
imported!
✨  Done in 1.38s.
```

Search
`yarn server:search`

```
% yarn server:search                                                                                                                                        [21:38:38]
yarn run v1.10.1
$ npx ts-node --project ./server/tsconfig.json ./server/contacts/search.ts
[ { firstname: 'Jimmie',
    lastname: 'Barninger',
    company: 'California Paint & Wlpaper Str',
    address: 'Box #-4038',
    city: 'Modesto',
    county: 'Stanislaus',
    state: 'CA',
    zip: '95352',
    phone: '209-525-7568',
    fax: '209-525-4389',
    email: 'jimmie@barninger.com',
    web: 'http://www.jimmiebarninger.com',
    followers: 3947,
    objectID: '134992552',
    _highlightResult:
     { firstname: [Object],
       lastname: [Object],
       company: [Object],
       address: [Object],
       city: [Object],
       email: [Object] } } ]
---
✨  Done in 1.49s.
```

## Spike instasearch.js

Launch `./public` directory with some web server

Using webrick
`ruby -run -e httpd ./public -p 8000`

[![Image from Gyazo](https://i.gyazo.com/fecdd9807bcad0008d2988fd85c64495.gif)](https://gyazo.com/fecdd9807bcad0008d2988fd85c64495)

## Spike React InstantSearch

Launch webpack dev-server
`yarn start`

[![Image from Gyazo](https://i.gyazo.com/3dc903a242d2e6084ace4921a980975b.gif)](https://gyazo.com/3dc903a242d2e6084ace4921a980975b)
