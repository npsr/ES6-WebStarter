import Helpers  from 'shared/helpers';

import tpl      from './page.pug';
import styles   from './page.scss';

class Page {
  static welcome() {
    console.log('Page:welcome');
    Helpers.addHTML('#root', tpl);
    Helpers.addCSS(styles);
  }
}

export default Page;
