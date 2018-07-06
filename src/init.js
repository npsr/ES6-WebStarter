import Helpers  from 'shared/helpers';
import Pack     from '../package.json';
import Routes   from './routes.js';

import templateCSS from 'template/styles.scss';

Helpers.addCSS(templateCSS);

new Routes();

console.info('Welcome to ' + Pack.name + ', version:' + Pack.version);
