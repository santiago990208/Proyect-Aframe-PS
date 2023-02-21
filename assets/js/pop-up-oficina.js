document.addEventListener('DOMContentLoaded', function() {
    // Reportar
    const closePopup_Reportar = document.querySelector('#cerrar_reportar');
    const popup_Reportar = document.querySelector('#popup_reportar');
    const information_Reportar = document.querySelector('#reportar_icono');

    if (information_Reportar) information_Reportar.addEventListener('click', function (e) {
      popup_Reportar.setAttribute('scale', '1 1 1');
    })
    
    if (closePopup_Reportar) closePopup_Reportar.addEventListener('click', function (e) {
      popup_Reportar.setAttribute('scale', '0 0 0');
    })

    // Inspeccionar
    const closePopup_Inspeccionar = document.querySelector('#cerrar_inspeccion');
    const popup_Inspeccionar = document.querySelector('#popup_inspeccion');
    const information_Inspeccionar = document.querySelector('#inspeccion_icono');

    if (information_Inspeccionar) information_Inspeccionar.addEventListener('click', function (e) {
      popup_Inspeccionar.setAttribute('scale', '1 1 1');
    })
    
    if (closePopup_Inspeccionar) closePopup_Inspeccionar.addEventListener('click', function (e) {
      popup_Inspeccionar.setAttribute('scale', '0 0 0');
    })

    // Covid
    const closePopup_Covid = document.querySelector('#cerrar_covid');
    const popup_Covid = document.querySelector('#popup_covid');
    const information_Covid = document.querySelector('#covid_icono');

    if (information_Covid) information_Covid.addEventListener('click', function (e) {
      popup_Covid.setAttribute('scale', '1 1 1');
    })
    
    if (closePopup_Covid) closePopup_Covid.addEventListener('click', function (e) {
      popup_Covid.setAttribute('scale', '0 0 0');
    })

    // Certificado de nacimiento
    const closePopup_certificado = document.querySelector('#cerrar_certificado');
    const popup_certificado = document.querySelector('#popup_certificado');
    const information_certificado = document.querySelector('#certificado_icono');

    if (information_certificado) information_certificado.addEventListener('click', function (e) {
      popup_certificado.setAttribute('scale', '1 1 1');
      console.log("hello")
    })
    
    if (closePopup_certificado) closePopup_certificado.addEventListener('click', function (e) {
      popup_certificado.setAttribute('scale', '0 0 0');
    })


    // Education
    const closePopup_Education = document.querySelector('#cerrar_educacion');
    const popup_Education = document.querySelector('#popup_educacion');
    const information_Education = document.querySelector('#reportar_educacion');

    if (information_Education) information_Education.addEventListener('click', function (e) {
      popup_Education.setAttribute('scale', '1 1 1');
      console.log('click');
    })
    
    if (closePopup_Education) closePopup_Education.addEventListener('click', function (e) {
      popup_Education.setAttribute('scale', '0 0 0');
    })

  });