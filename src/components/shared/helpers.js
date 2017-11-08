class Helpers {

  constructor() {}

  addCSS(css) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.querySelector('head').appendChild(style);
  }

  addHTML(target, content) {
    document.querySelector(target).innerHTML = content;
  }
}

export default Helpers;
