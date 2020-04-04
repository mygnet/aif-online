# aif-online

## Simple method that checks if there is internet connectivity

Basically it is a method that checks if there is an available internet connection, returning a promise, in case of success true otherwise it will return false.

### Installation

Download the library with npm / Yarn, from your local files.

Via NPM:

    $ npm install aif-online
    
Via YARN:

    $ yarn add aif-online

### Use
The library can be included in your code through imports from CommonJS or ES.

ES2015 (ES6):
```javascript
import online from "aif-online";
```
CommonJS:
```javascript
var online = require("aif-online");
```

Example:

```javascript
var online = require('aif-online');
online(function(success, err){
  if (success) {
    console.log('internet available');
  } else {
    console.log('internet not available', err)
  }
});
```

## Tests

    $ npm test

O well

    $ yarn test

## build

    $ npm run build

O well

    $ yarn build



## Security contact information

To report security vulnerabilities, use the following link: https://github.com/mygnet/aif-online/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-online.svg
[npm-url]: https://www.npmjs.com/package/aif-online