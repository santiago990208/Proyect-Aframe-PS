document.addEventListener('DOMContentLoaded', function() {
    
    const cerrar_centro_informacion = document.querySelector('#cerrar_centro_informacion');
    const centro_informacion_popup = document.querySelector('#centro_informacion_popup');
    const centro_informacion_totem = document.querySelector('#centro_informacion_totem');    
    
    if (centro_informacion_totem) centro_informacion_totem.addEventListener('click', function (e) {
    centro_informacion_popup.setAttribute('scale', '1 1 1');
    });
    
    if (cerrar_centro_informacion) cerrar_centro_informacion.addEventListener('click', function (e) {
    centro_informacion_popup.setAttribute('scale', '0 0 0');
    });

    const cerrar_centro_informacion_acceso = document.querySelector('#cerrar_centro_informacion_acceso');
    const centro_informacion_popup_acceso = document.querySelector('#centro_informacion_popup_acceso');
    const recepcion_informacion = document.querySelector('#recepcion_informacion');

    if (recepcion_informacion) recepcion_informacion.addEventListener('click', function (e) {
    centro_informacion_popup_acceso.setAttribute('scale', '1 1 1');
    });
    
    if (cerrar_centro_informacion_acceso) cerrar_centro_informacion_acceso.addEventListener('click', function (e) {
    centro_informacion_popup_acceso.setAttribute('scale', '0 0 0');
    });
    
    });