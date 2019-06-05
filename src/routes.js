import Aviator  from 'aviator';
import Home     from './components/home/home.class';
import Page     from './components/page/page.class';

class Routes {
  constructor() {
    Aviator.setRoutes({
      // -----------------------------------------------------------------------
      '/': {
        target: Home,
        '/': 'welcome',
      },
      // -----------------------------------------------------------------------
      '/page': {
        target: Page,
        '/': 'welcome',
      },
    });

    Aviator.dispatch();
  }
}

export default Routes;
