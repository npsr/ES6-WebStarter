import css      from 'template/styles.scss';

import Helpers  from 'shared/helpers';
import pack     from '../package.json';
import homeTpl  from 'components/home/home.pug';

const helpers = new Helpers();

helpers.addCSS(css);
helpers.addHTML('#root', homeTpl);

console.info('Welcome to ' + pack.name + ', version:' + pack.version);
