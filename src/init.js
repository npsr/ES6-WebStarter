const pack = require('../package.json');
const homeTpl = require('components/home/home.pug');

console.info('Welcome to ' + pack.name + ', version:' + pack.version);
document.getElementById('root').innerHTML = homeTpl;
