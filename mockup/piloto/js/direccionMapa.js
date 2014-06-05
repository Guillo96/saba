function $$(id){
    return document.getElementById(id);
}
var geocoder;
var map;
var MEDELLIN = 'Medellin, Antioquia, CO';
var MEDELLINCOOR = parseFloat(6.235925)+parseFloat(-75.57513);

var directionsService = '';
var miDireccion = '';
/*variable con puntosAtencion y direcciones quemadas, luego de pruebas este dato debe ser recibido*/
var puntosAtencion = {
    'Carrera 52 # 74–43, Itagui, Antioquia, CO--315 45 53':'Casa',
    'Carrera 45H # 40A sur – 31, Medellin, Antioquia, CO--315 44 53':'Apartamento',
    'Carrera 68 # 5D-197 107, Medellin, Antioquia, CO--315 42 53':'Apartamento'
};
var popups = [];
var iconoEdificio;
var iconoNotaria, iconoVeeduria, iconoInstrumentosP;

window.onload = function(){
    //cargaScript();
}

function cargaScript(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.googleapis.com/maps/api/js?v=3&'+
                '&sensor=false&callback=inicializar';
    document.body.appendChild(script);
}

function inicializar(){
    console.log('inicia mapa');
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    geocoder = new google.maps.Geocoder();
    centro = new google.maps.LatLng(MEDELLINCOOR);
    var opcionesMapa = {
        zoom: 14,
        center : centro,
        mapTypeControl: false,
        mapTypeControlOptions: false,
        streetViewControl: false,
        streetViewControlOptions: false
    }
    map = new google.maps.Map($$('direccionMapa'), opcionesMapa);
    directionsDisplay.setMap(map);
    direccionInicial();
    muestraRuta();
    //cargaIconos();
    //cargarpuntosAtencion();
    //cargaConvencion();
}

function cargaConvencion(){
    var convencionMapa = convenciones();
    var convencionM = document.createElement('div');
    convencionM.id = 'convencionZ';
    convencionM.innerHTML = convencionMapa;
    convencionM.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(convencionM);
}
function cargaIconos(){
    iconoEdificio = 'M 0 512 h 256 V 0 H 0 V 512 Z M 160 64 h 64 v 64 h -64 V 64 Z M 160 192 h 64 v 64 h -64 V 192 Z M 160 320 h 64 v 64 h -64 V 320 Z M 32 64 h 64 v 64 H 32 V 64 Z M 32 192 h 64 v 64 H 32 V 192 Z M 32 320 h 64 v 64 H 32 V 320 Z M 288 160 h 224 v 32 H 288 V 160 Z M 288 512 h 64 V 384 h 96 v 128 h 64 V 224 H 288 V 512 Z';
    iconoNotariaX1 = 'M 50 15 c 0 -6.627 -5.373 -12 -12 -12 H 15 C 8.373 3 3 8.373 3 15 v 23 c 0 6.627 5.373 12 12 12 h 23 c 6.627 0 12 -5.373 12 -12 V 15 Z M 31 35.88 c 0 2.457 -0.901 3.685 -2.575 3.685 c -0.746 0 -1.319 -0.25 -1.771 -0.751 S 26 37.573 26 36.595 V 19.913 c -3 2.384 -5.251 3.575 -6.326 3.575 c -0.513 0 -0.997 -0.205 -1.394 -0.614 c -0.397 -0.409 -0.61 -0.883 -0.61 -1.421 c 0 -0.623 0.188 -1.081 0.579 -1.375 c 0.392 -0.293 1.078 -0.672 2.068 -1.137 c 1.479 -0.696 2.66 -1.43 3.545 -2.199 s 1.67 -1.632 2.355 -2.585 c 0.684 -0.953 1.13 -1.54 1.337 -1.76 c 0.208 -0.22 0.599 -0.33 1.173 -0.33 c 0.647 0 1.231 0.251 1.622 0.752 S 31 14.011 31 14.891 V 35.88 Z';
    iconoNotariaX2 = 'M 27.278 26.693 c -0.562 -0.301 -1.19 -0.451 -1.888 -0.451 c -0.987 0 -1.814 0.33 -2.482 0.988 s -1.002 1.578 -1.002 2.758 c 0 0.756 0.157 1.422 0.472 1.998 c 0.314 0.576 0.743 1.021 1.285 1.336 s 1.147 0.471 1.815 0.471 c 0.677 0 1.288 -0.16 1.83 -0.479 c 0.542 -0.32 0.968 -0.77 1.277 -1.352 c 0.309 -0.58 0.465 -1.248 0.465 -2.004 c 0 -0.754 -0.156 -1.412 -0.465 -1.975 C 28.275 27.424 27.839 26.992 27.278 26.693 Z';
    iconoNotariaX3 = 'M 21.248 4.196 H 4.655 c -0.64 0 -1.158 0.518 -1.158 1.157 v 16.592 c 0 0.64 0.519 1.156 1.158 1.156 h 16.593 c 0.639 0 1.156 -0.517 1.156 -1.156 V 5.353 C 22.404 4.713 21.887 4.196 21.248 4.196 Z M 12.104 19.432 c -1.456 0 -2.673 -0.333 -3.336 -0.683 l 0.497 -2.101 c 0.535 0.257 1.622 0.59 2.709 0.59 c 1.161 0 2.396 -0.553 2.396 -1.824 c 0 -1.236 -0.977 -1.991 -3.373 -1.991 c -0.664 0 -1.125 0.036 -1.622 0.11 l 0.792 -6.284 h 6.598 v 2.304 h -4.644 l -0.258 1.843 c 0.258 -0.037 0.479 -0.037 0.774 -0.037 c 1.142 0 2.304 0.257 3.153 0.866 c 0.901 0.607 1.455 1.603 1.455 3.003 C 17.245 17.458 15.329 19.432 12.104 19.432 Z';
    iconoVeeduriaX = 'M 0 512 h 256 V 0 H 0 V 512 Z M 160 64 h 64 v 64 h -64 V 64 Z M 160 192 h 64 v 64 h -64 V 192 Z M 160 320 h 64 v 64 h -64 V 320 Z M 32 64 h 64 v 64 H 32 V 64 Z M 32 192 h 64 v 64 H 32 V 192 Z M 32 320 h 64 v 64 H 32 V 320 Z M 288 160 h 224 v 32 H 288 V 160 Z M 288 512 h 64 V 384 h 96 v 128 h 64 V 224 H 288 V 512 Z';
    iconoCercaX = 'M 41.083 14.186 c 1.523 0 2.763 -1.239 2.763 -2.763 S 42.607 8.66 41.083 8.66 c -1.523 0 -2.763 1.239 -2.763 2.763 C 38.32 12.946 39.56 14.186 41.083 14.186 Z M 41.083 9.16 c 1.248 0 2.263 1.015 2.263 2.263 s -1.015 2.263 -2.263 2.263 s -2.263 -1.015 -2.263 -2.263 S 39.835 9.16 41.083 9.16 Z M 57.133 51.058 V 23.944 c 0 -3.557 -2.917 -6.449 -6.501 -6.449 h -1.237 c 1.203 -1.644 1.814 -3.582 1.814 -5.776 c 0 -5.583 -4.542 -10.125 -10.125 -10.125 S 30.958 6.136 30.958 11.719 c 0 0.369 0.057 1.003 0.167 1.855 l -0.005 1.142 c -0.019 1.108 -0.018 1.447 0.005 1.602 v 1.178 H 12.194 c -3.584 0 -6.5 2.893 -6.5 6.449 v 27.113 c 0 3.555 2.916 6.447 6.5 6.447 h 38.438 C 54.216 57.505 57.133 54.612 57.133 51.058 Z M 41.083 3.344 c 4.618 0 8.375 3.757 8.375 8.375 c 0 2.302 -0.797 4.242 -2.363 5.776 l -5.911 5.779 l -6.61 6.457 l -0.151 0.146 c 0.001 0 0.001 0.001 0.002 0.001 l -1.549 1.513 v -2.582 l 0.001 -0.201 h -0.001 v -5.333 V 22.2 v -2.555 v -2.15 v -3.024 c 0.008 -0.43 -0.047 -1.085 -0.096 -1.662 c -0.036 -0.444 -0.071 -0.852 -0.071 -1.09 C 32.708 7.101 36.465 3.344 41.083 3.344 Z M 38.953 34.792 h -1.291 c 0.001 -0.045 0.007 -0.089 0.007 -0.135 c 0 -1.541 -0.572 -2.946 -1.505 -4.033 l 0.932 -0.91 c 1.16 1.321 1.864 3.051 1.864 4.943 C 38.96 34.703 38.954 34.747 38.953 34.792 Z M 23.953 34.657 c 0 -4.026 3.19 -7.31 7.172 -7.485 v 1.289 c -3.27 0.174 -5.882 2.882 -5.882 6.196 c 0 0.046 0.006 0.09 0.007 0.135 h -1.29 C 23.959 34.747 23.953 34.703 23.953 34.657 Z M 28.769 35.792 c 0.322 0.962 1.133 1.699 2.146 1.896 v 2.567 c -2.47 -0.237 -4.478 -2.075 -4.968 -4.463 H 28.769 Z M 31.914 35.792 h 1.711 c -0.297 0.714 -0.936 1.25 -1.711 1.404 V 35.792 Z M 30.914 37.173 c -0.736 -0.176 -1.34 -0.694 -1.625 -1.381 h 1.625 V 37.173 Z M 31.914 37.696 c 1.051 -0.172 1.9 -0.916 2.231 -1.904 h 2.821 c -0.496 2.414 -2.544 4.264 -5.053 4.467 L 31.914 37.696 L 31.914 37.696 Z M 25.839 34.792 c -0.001 -0.045 -0.007 -0.089 -0.007 -0.135 c 0 -2.992 2.346 -5.437 5.294 -5.609 v 3.032 c -1.378 0.163 -2.455 1.303 -2.506 2.712 H 25.839 Z M 25.353 35.792 c 0.504 2.711 2.771 4.808 5.562 5.051 v 1.288 c -3.504 -0.252 -6.343 -2.916 -6.865 -6.339 C 24.05 35.792 25.353 35.792 25.353 35.792 Z M 31.915 40.847 c 2.83 -0.208 5.138 -2.317 5.646 -5.055 h 1.304 c -0.527 3.45 -3.408 6.128 -6.95 6.343 V 40.847 Z M 37.083 34.657 c 0 0.046 -0.006 0.09 -0.007 0.135 h -2.78 c -0.024 -0.646 -0.267 -1.235 -0.654 -1.703 l 2.104 -2.055 C 36.574 32.015 37.083 33.274 37.083 34.657 Z M 33.797 34.792 H 31.9 l 1.386 -1.354 C 33.585 33.814 33.772 34.28 33.797 34.792 Z M 29.12 34.792 c 0.05 -1.134 0.903 -2.054 2.006 -2.212 v 2.212 H 29.12 Z M 31.126 25.908 c -4.679 0.176 -8.434 4.026 -8.434 8.749 c 0 0.046 0.006 0.09 0.007 0.135 h -11.18 V 23.274 h 19.607 V 25.908 Z M 11.519 35.792 h 11.256 c 0.536 4.121 3.941 7.344 8.141 7.603 v 2.559 H 11.519 C 11.519 45.954 11.519 35.792 11.519 35.792 Z M 31.915 43.398 c 4.238 -0.221 7.685 -3.458 8.226 -7.606 h 11.023 v 10.161 H 31.915 C 31.915 45.953 31.915 43.398 31.915 43.398 Z M 51.164 34.792 H 40.216 c 0.001 -0.045 0.007 -0.089 0.007 -0.135 c 0 -2.234 -0.849 -4.27 -2.229 -5.819 l 5.696 -5.563 h 7.475 L 51.164 34.792 L 51.164 34.792 Z M 54.983 51.058 c 0 2.369 -1.952 4.299 -4.352 4.299 H 12.194 c -2.398 0 -4.351 -1.93 -4.351 -4.299 V 23.944 c 0 -2.371 1.952 -4.299 4.351 -4.299 h 18.931 V 22.2 H 10.98 c -0.297 0 -0.537 0.24 -0.537 0.537 V 46.49 c 0 0.297 0.24 0.538 0.537 0.538 H 51.7 c 0.297 0 0.538 -0.241 0.538 -0.538 V 22.737 c 0 -0.297 -0.241 -0.537 -0.538 -0.537 h -6.912 l 2.615 -2.555 h 3.229 c 2.4 0 4.352 1.928 4.352 4.299 v 27.114 H 54.983 Z M 41.083 17.432 c 3.312 0 6.009 -2.696 6.009 -6.009 c 0 -3.314 -2.696 -6.009 -6.009 -6.009 c -3.312 0 -6.009 2.695 -6.009 6.009 C 35.074 14.735 37.771 17.432 41.083 17.432 Z M 41.083 5.982 c 3.001 0 5.441 2.44 5.441 5.441 c 0 3 -2.44 5.44 -5.441 5.44 c -3 0 -5.44 -2.44 -5.44 -5.44 C 35.643 8.422 38.083 5.982 41.083 5.982 Z M 51.102 49.749 H 11.548 c -0.369 0 -0.67 0.363 -0.67 0.812 s 0.301 0.812 0.67 0.812 h 39.555 c 0.371 0 0.67 -0.363 0.67 -0.812 C 51.772 50.112 51.474 49.749 51.102 49.749 Z';
    iconoNotaria = {
        path: iconoNotariaX3,
        fillColor: '#D30C35',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 1
    }
    iconoVeeduria = {
        path: iconoEdificio,
        fillColor: '#04ae9c',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.05
    }
    iconoCerca = {
        path: iconoCercaX,
        fillColor: 'black',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 0.5
    }
}
function muestraRuta(){
    var MEDELLINLL = new google.maps.LatLng(37.7699298, -122.4469157);// 
    var MEDALLO = new google.maps.LatLng(37.7683909618184, -122.51089453697205);//6.235925, -75.57513
    var MedalloOf = new google.maps.LatLng(6.235925,-75.57513699999998);
    var Medallo2 = new google.maps.LatLng(6.227160679751007, -75.57388365268707);
    console.log(miDireccion+'mi');
    var request = {
        origin: Medallo2,
        destination: MedalloOf,//miDireccion
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request,function(response,status){
        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(response);
        }
    })
}
function direccionInicial(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
            );
            miDireccion = pos.k+','+pos.A;
            //console.log(miDireccion);
            //map.setCenter(pos);
        },function(){
            //handleNoGeolocation(true);
        });
    }else{
        console.log('no geo');
        handleNoGeolocation(false);
        var direccion = MEDELLIN;
        geocoder.geocode({'address': MEDELLIN},function(results, estado){
            if(estado == google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
            }else{
                console.log('no se pudo encontrar la dir ini por: '+estado);
            }
        });   
    }
}

/*En construccion
 *Retornara direccion en coordenadas de una direccion formato humano
 */
function direccionInicialX(direccion){
    geocoder.geocode({'address': direccion},function(results, estado){
        if(estado == google.maps.GeocoderStatus.OK){
            var coorParcial = results[0].geometry.location;
            coorParcial = coorParcial.toString().split('(');
            coorParcial = coorParcial[1].split(/,/);
            var latitud = Number(parseFloat(coorParcial[0]).toFixed(6));
            var longitud = Number(parseFloat(coorParcial[1]).toFixed(6));
            var coord = latitud+','+longitud;
            //asignarCoordenada(coord);
        }else{
            console.log('no se pudo encontrar la dir ini por: '+estado);
        }
    });
}

function cargarpuntosAtencion(){
    for (var par in puntosAtencion){
        marcaPredio(par,puntosAtencion[par]);
    }
    //marcaPredio(puntosAtencion[0])
}

function marcaPredio(direccion,puntoAtencion){
    geocoder.geocode({'address': direccion},function(resultados, estado){
        if(estado == google.maps.GeocoderStatus.OK){
            map.setCenter(resultados[0].geometry.location);
            var icono = '';
            var puntoAtencionX = '';
            var telefono = '';
            var direccionX = '';
            try{
                direccionX = direccion.split('--');
                telefono = direccionX[1];
                direccion = direccionX[0];
            }catch(e){
                console.log(puntoAtencion);
                console.log('no hay punto atención');
            }
            if(puntoAtencion == 'Veeduría'){
                icono = iconoVeeduria;
            }else if(puntoAtencion == 'Notaría 5'){
                icono = iconoNotaria;
            }else{
                icono = iconoCerca;
            }
            var predio = new google.maps.Marker({
                map: map,
                icon: icono,
                title: puntoAtencion,
                position: resultados[0].geometry.location
            });
            var info = infoPopup(direccion,puntoAtencion,telefono);
            var popup = new google.maps.InfoWindow({
                content: info
            });
            popups.push(popup);
            google.maps.event.addListener(predio,'click',function(){
                cierraPopups();
                popup.open(map,predio);
                cierraPopups();
                popup.open(map,predio);
            });
            //var bounds = new google.map.LatLngBounds();
            //bounds.extend(resultados[0].geometry.location);
            //map.fitBounds(bounds);
        }else{
            console.log('no se pudo encontrar la direccion.'+estado);
        }
    });
}

function infoPopup(direccion,puntoAtencion,telefono){
    var direccionCorta = '';
    direccionCorta = direccion.split(',',1);
    var popup = ""+
        "<a href='#'>"+
        "<div class='informacionMapa'>"+
        "<div>"+
            "<span>"+puntoAtencion+"</span>"+
        "</div>"+
        "<div>"+
            "<span>Dirección: </span>"+direccionCorta+
        "</div>"+
        "<div>"+
            "<span>Teléfono: </span>"+telefono+
        "</div>"+
        "</div></a>";
    return popup;
}
function convenciones(){
    var convencion = ""+
        "<div class='convencion'>"+
        "<div class='convencionX'>"+
            "<div class='pestanaconvencion'></div>"+
            "<div class='tituloconvencion'>Convenciones"+
            "</div>"+
            "<div class='contenidoconvencion'>"+
                "<div>"+
                    "<span class='texto'>Veedurías</span>"+
                    "<span class='iconoVeeduria icon-veeduria'></span>"+
                "</div>"+
                "<div>"+
                    "<span class='texto'>Notarías</span>"+
                    "<span class='iconoNotaria icon-notaria5'></span>"+
                "</div>"+
                "<div>"+
                    "<span class='texto'>Más Cerca</span>"+
                    "<span class='iconoMasCerca icon-mascerca'></span>"+
                "</div>"+
            "</div>"+
        "</div>"+
        "</div>";
    return convencion;
}
function cierraPopups(){
    for (var i=0; i<popups.length; i++){
        popups[i].close();
    }
}