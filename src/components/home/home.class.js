import Helpers  from 'shared/helpers';

import tpl      from './home.pug';
import styles   from './home.scss';
import logo     from 'images/es6.png';

console.log(logo);

class Home {
  static welcome() {
    console.log('Home:welcome');
    Helpers.addHTML('#root', tpl);
    Helpers.addCSS(styles);
    Helpers.addIMG('.logo', logo)
  }
}

export default Home;
