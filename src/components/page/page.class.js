import Helpers  from 'shared/helpers';

import tpl      from './page.pug';

class Page {
  static welcome() {
    console.log('Page:welcome');
    Helpers.addHTML('#root', tpl);
  }
}

export default Page;
