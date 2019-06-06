// @flow
import { fromEvent } from 'rxjs';

class Helpers {
  // ---------------------------------------------------------------------------
  static addCSS(css: string) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;

    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      const head = document.querySelector('head');
      if (head) head.appendChild(style);
    });
  }

  // ---------------------------------------------------------------------------
  static addHTML(target: string, content: string) {
    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      const root = document.querySelector(target || '#root');
      if (root) root.innerHTML = content;
    });
  }

  // ---------------------------------------------------------------------------
  static addIMG(target: string, src: string) {
    fromEvent(document, 'DOMContentLoaded').subscribe(() => {
      const img = document.querySelector(`img ${target}`);
      if (img) img.setAttribute('src', src);
    });
  }
}

export default Helpers;
