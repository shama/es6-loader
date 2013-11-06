# es6-module-loader
Transpiles ES6 modules for [webpack](https://github.com/webpack/webpack).

## Usage

```js
import bamboo from 'es6-module!./bamboo.js';

function Panda() {
  this.eat = bamboo;
}

export default Panda;
```

```js
var Panda = require('es6-module!./panda.js');
```

Or within the webpack config:

```js
module: {
  loaders: [
    { test: /\.js$/, loader: 'es6-module-loader' }
  ]
}
```

and then import normally:

```js
import bamboo from './bamboo.js';
```

## Install

`npm install es6-module-loader --save-dev`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History
* 0.1.0 - Initial release

## License
Copyright (c) 2013 Kyle Robinson Young  
Licensed under the MIT license.