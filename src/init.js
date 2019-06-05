import Helpers  from 'shared/helpers';
import templateCSS from 'template/styles.scss';
import Pack     from '../package.json';
import Routes   from './routes';


Helpers.addCSS(templateCSS);

const routes = new Routes();
routes();

console.info(`Welcome to ${Pack.name}, version:${Pack.version}`);
