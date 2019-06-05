class Http {
  static get(url, res, err) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        res(xhr.responseText);
      } else {
        err(xhr.status);
      }
    };
    xhr.send();
  }

  static post(url, data, res, err) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      if (xhr.status === 200) {
        res(xhr.responseText);
      } else if (xhr.status !== 200) {
        err(xhr.status);
      }
    };
    xhr.send(encodeURI(data));
  }
}

export default Http;
