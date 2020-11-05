const cowsay = require('cowsay');

// habilitar "type": "module" no package.json
// import cowsay from 'cowsay';

const result = cowsay.say({text: 'Im a moooodule', e : 'oO', T : 'U ' });
console.log(result);