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
        console.log('hello');
        popup_consult_sr_respond.setAttribute('scale', '0 0 0');
        var api_respond_info = document.querySelector('#api_respond_info');
        api_respond_info.innerHTML = "";
    });
    
    //Grabación de voz 1
    const record = document.querySelector('#microphoneSR');
    const text_code = document.querySelector('#Text1');

    let recognition=new webkitSpeechRecognition();
    recognition.lang='es-mx';
    recognition.continuous = false;
    recognition.interimResults=false; //No devuelve resultados parciales

    recognition.onresult = (event) => {
        const results=event.results; 
        const frase= results[results.length-1][0].transcript;
        text_code.setAttribute('text', 'value:'+frase);
    }

    if (record) record.addEventListener('click', function (e) {
        console.log('Start recording');
        recognition.start();
    })
    //Fin grabación
    const consult = document.querySelector('#consult_button');
    if (consult) consult.addEventListener('click', function (e) {
            
        const consulta=text_code.getAttribute('text');
        var value=Object.values(consulta)[0]
        var code='';
        for (i in value){
            if(value[i]!==' '){
                code+=value[i]
            }
        }
        consult.setAttribute('text', 'value:Charging;wrapCount:18; align:center; width: 1.6; color: black; lineHeight:60;');
        
        console.log(code);

        var idtest="220440"
        //condicion para limpiar espacios y solo aceptar numero
        var url='https://fa-eset-dev4-saasfademo1.ds-fa.oraclepdemos.com/crmRestApi/resources/11.13.18.05/serviceRequests/'+"SR"+idtest;
        console.log(url)
        
        var username = 'John.Dunbar';
        var password = 'uKi8F?9*'; //Contraseña del Service Request

		const build_world = new BuilderAPI(url, username, password);
  		build_world.api_call();
          
		
    });

    
        
     
});