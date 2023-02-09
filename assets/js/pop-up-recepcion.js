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
    

    const closePopup_Reportes1 = document.querySelector('#cerrar_consulta1');
    const popup_Reportes1 = document.querySelector('#logo_consulta1');
    const information_Reportes1 = document.querySelector('#popup_consulta1');

    if (popup_Reportes1) popup_Reportes1.addEventListener('click', function (e) {
        information_Reportes1.setAttribute('scale', '1 1 1');
    });
    if (closePopup_Reportes1) closePopup_Reportes1.addEventListener('click', function (e) {
        information_Reportes1.setAttribute('scale', '0 0 0');
    });
    
    const close_consult_sr_respond = document.querySelector('#close_consult_sr_respond');
    const popup_consult_sr_respond = document.querySelector('#popup_consult_sr_respond');

    if (close_consult_sr_respond) close_consult_sr_respond.addEventListener('click', function (e) {
        popup_consult_sr_respond.setAttribute('scale', '0 0 0');
        var api_respond_info = document.querySelector('#api_respond_info');
        api_respond_info.innerHTML = "";
    });
    
    //Grabación de voz 1
    const grabar = document.querySelector('#microfono1');
    const texto = document.querySelector('#Text1');

    let recognition=new webkitSpeechRecognition();
    recognition.lang='es-mx';
    recognition.continuous = false;
    recognition.interimResults=false; //No devuelve resultados parciales

    recognition.onresult = (event) => {
        const results=event.results; 
        const frase= results[results.length-1][0].transcript;
        texto.setAttribute('text', 'value:'+frase);
    }

    if (grabar) grabar.addEventListener('click', function (e) {
        console.log('Start recording');
        recognition.start();
    })
    //Fin grabación
    const consultar = document.querySelector('#boton_consultar');
    if (consultar) consultar.addEventListener('click', function (e) {
            
        const consulta=texto.getAttribute('text');
        var value=Object.values(consulta)[0]
        var palabra='';
        for (i in value){
            if(value[i]!==' '){
                palabra+=value[i]
            }
        }
        
        console.log(palabra);

        var idtest="218439"
        //condicion para limpiar espacios y solo aceptar numero
        var url='https://fa-eset-dev4-saasfademo1.ds-fa.oraclepdemos.com/crmRestApi/resources/11.13.18.05/serviceRequests/'+"SR"+palabra;
        console.log(url)
        
        var username = 'john.martin';
        var password = 'yCY5b?8?';

		const build_world = new BuilderAPI(url, username, password);
  		build_world.api_call(); 	
          
		
    });

    
        
     
});