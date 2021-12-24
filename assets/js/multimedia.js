export default class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = () => {
      return _url;
    };

    this.setUrl = (newUrl) => {
      return (_url = newUrl);
    };
  }

  get url() {
    return this.getUrl();
  }

  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`;
  }
}
