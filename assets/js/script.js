const app = (() => {
  let addVideoPrivate = (url, id) => {
    $(`#${id}-iframe`).attr('src', url);
  };

  return {
    addVideo: (url, id) => {
      addVideoPrivate(url, id);
    },
  };
})();

class Multimedia {
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

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;

    this.getId = () => {
      return _id;
    };
  }
  get id() {
    return this.getId();
  }

  playMultimedia() {
    app.addVideo(this.url, this.id);
  }

  setInicio(tiempoSeg) {
    return this.setUrl(`${this.url}?start=${tiempoSeg}`);
  }
}

const reproductorMusica = new Reproductor(
  'https://www.youtube.com/embed/1syitBkoTfg',
  'musica'
);
const reproductorPelicula = new Reproductor(
  'https://www.youtube.com/embed/O3DWc2vefy8',
  'pelicula'
);

const reproductorSerie = new Reproductor(
  'https://www.youtube.com/embed/SGDHxCUlhlU',
  'serie'
);

reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

console.log(reproductorMusica.url);
reproductorMusica.setInicio(60);
console.log(reproductorMusica.url);
