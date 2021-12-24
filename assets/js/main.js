import Reproductor from './reproductor.js';

let addVideoPrivate = (url, id) => {
  $(`#${id}`).append(`
     <iframe id="musica-iframe" width="560" height="315" src="${url}" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  `);
};

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

reproductorMusica.setInicio(60);
reproductorMusica.playMultimedia(addVideoPrivate);

reproductorPelicula.playMultimedia(addVideoPrivate);
reproductorSerie.playMultimedia(addVideoPrivate);
