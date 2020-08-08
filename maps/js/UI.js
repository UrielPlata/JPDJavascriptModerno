class UI {
    constructor() {
        // instanciar la api
        this.api = new API();

        // crear los markers con LayerGroup
        this.markers = new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
      this.api.obtenerDatos()
        .then(datos => {
          const resultado = datos.respuestaJSON.results;

          this.mostrarPines(resultado);
        })
    }

    mostrarPines(datos) {
      // Limpiar los markers
      this.markers.clearLayers();

      // recorrer los Establecimientos
      datos.forEach( dato => {
        // destructing
        const {latitude,longitude,calle,regular,premium} = dato;

        //Crear popup
        const opcionesPopUp = L.popup()
          .setContent(`<p>Calle: ${calle}</p>
                       <p><b>Regular:</b> $ ${regular}</p>
                       <p><b>Premium:</b> $ ${premium}</p>
            `);
        // Agregar el pin
        const marker = new L.marker([
          parseFloat(latitude),
          parseFloat(longitude)
        ]).bindPopup(opcionesPopUp);

        this.markers.addLayer(marker);
      });
      this.markers.addTo(this.mapa);
    }

    // Buscador
    obtenerSugerencias(busqueda) {
      this.api.obtenerDatos()
        .then(datos => {
          // obtener los datos
          const resultados = datos.respuestaJSON.results;

          // Enviar el json y la busqueda para el filtrado
          this.filtrarSugerencias(resultados,busqueda);
        })
    }

    // Filtra las sugerencias en base al input
    filtrarSugerencias(resultado,busqueda){
      const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);

      this.mostrarPines(filtro);
    }
}
