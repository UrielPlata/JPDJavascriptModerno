import {API} from './api.js';
import * as ui from './interfaz.js';

ui.formularioBuscar.addEventListener('submit',(e) => {
  e.preventDefault();

  const artista =document.querySelector('#artista').value;
  const cancion =document.querySelector('#cancion').value;

  if(artista === '' || cancion === ''){
    ui.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
    ui.divMensajes.classList.add('error');
    setTimeout(() => {
      ui.divMensajes.innerHTML = '';
      ui.divMensajes.classList.remove('error');
    },3000);
  }else{
    const api = new API(artista,cancion);
    api.consultarAPI()
      .then(data => {
        if(data.respuesta.lyrics){
          const letra =  data.respuesta.lyrics;
          ui.divResultado.textContent = letra;
        }else{
          ui.divMensajes.innerHTML = 'La canción no existe, prueba con otra busqueda';
          ui.divMensajes.classList.add('error');
          setTimeout(()=> {
            ui.divMensajes.innerHTML = '';
            ui.divMensajes.classList.remove('error');
            ui.formularioBuscar.reset();
          },3000);
        }
      });

  }

});
