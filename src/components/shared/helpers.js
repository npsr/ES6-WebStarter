class Helpers {
  
  static addCSS(css) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.querySelector('head').appendChild(style);
  }

  static addHTML(target, content) {
    document.querySelector(target || '#root').innerHTML = content;
  }
  static addIMG(target, src) {
      document.querySelector(target).src = src;
  }
}

export default Helpers;
