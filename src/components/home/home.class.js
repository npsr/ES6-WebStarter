import Helpers  from 'shared/helpers';

import tpl      from './home.pug';

class Home {
  static welcome() {
    console.log('Home:welcome');
    Helpers.addHTML('#root', tpl);
  }
}

export default Home;
