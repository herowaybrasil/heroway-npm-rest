// habilitar "type": "commonjs" no package.json
const cowsay = require('cowsay');

// habilitar "type": "module" no package.json
// import cowsay from 'cowsay';

// import * as myModule from './my-module.js';
// import greeting, { company } from './my-module.js';

// console.log(myModule);

const result = cowsay.say({text: 'Im a moooodule', e : 'oO', T : 'U ' });
console.log(result);