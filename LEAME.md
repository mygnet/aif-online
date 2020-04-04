# aif-online

## Simple método que verifica si existe conectividad de internet

Básicamente es un método que comprueba si existe conexión a internet disponible, devolviendo una promesa, en caso de exito true de lo contrario devolverá false.

### Instalación

Descargue la biblioteca con npm / yarn, desde sus archivos locales.

Vía NPM:

    $ npm install aif-online
    
Vía YARN:

    $ yarn add aif-online

### Uso
La biblioteca se puede incluir en su código a través de importaciones de CommonJS o ES.

ES2015 (ES6):
```javascript
import * as cipher from "aif-online";
```
CommonJS:
```javascript
var cipher = require("aif-online");
```
Ejemplo:

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

o bien 

    $ yarn test

## build

    $ npm run build

o bien

    $ yarn build



## Información de contacto de seguridad

Para informar vulnerabilidades de seguridad, utilice el siguiente link: https://github.com/mygnet/aif-online/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-online.svg
[npm-url]: https://www.npmjs.com/package/aif-online