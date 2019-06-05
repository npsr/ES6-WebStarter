// @flow
import { fromEvent } from 'rxjs';

class Helpers {
  // ---------------------------------------------------------------------------
  static addCSS(css: string) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;

    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      document.querySelector('head').appendChild(style);
    });
  }

  // ---------------------------------------------------------------------------
  static addHTML(target: HTMLElement, content: string) {
    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      document.querySelector(target || '#root').innerHTML = content;
    });
  }

  // ---------------------------------------------------------------------------
  static addIMG(target: HTMLElement, src: string) {
    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      document.querySelector(target).src = src;
    });
  }
}

export default Helpers;
