import Aviator  from 'aviator';
import Home     from './components/home/home.class.js';
import Page     from './components/page/page.class.js';

class Routes {
  constructor() {
    Aviator.setRoutes({
      '/': {
        target: Home,
        '/': 'welcome'
      },
      '/page': {
        target: Page,
        '/': 'welcome'
      }
    });

    Aviator.dispatch();
  }
}

export default Routes;
