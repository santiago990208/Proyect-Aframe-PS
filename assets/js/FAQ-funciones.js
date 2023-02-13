var genericListener = (a) => {
    console.log('Generic listener')
    let source = a.path.find(item => item.tagName.toLowerCase() === 'a-gui-radio');
    console.log('Pasó')
    var thisId = source.id;
    var thisToggle = document.getElementById(thisId);
    var thisToggleComponent = thisToggle.components['gui-radio'];
    if (!thisToggleComponent) thisToggleComponent = thisToggle;
    var thisToggleComponentChecked = thisToggleComponent.data.checked;
    
    let idComps = thisId.split('-');
    let otherBtn1 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a1'),
        otherBtn2 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a2'),
        otherBtn3 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a3');
        otherBtn4 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a4');
        otherBtn5 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a5');
    let nextBtn = document.getElementById(idComps[0] + '-' + idComps[1] + '-next');
    let answer = thisToggle.getAttribute('value');
    if (thisToggleComponentChecked) {
      nextBtn.setAttribute('scale', '1 1 1');
      console.log('Next btn scaled up')
      if (idComps[0] === 'm1')  {
        if (idComps[1] === 'q1') m1q1answer = answer;
        else if (idComps[1] === 'q2') m1q2answer = answer;
        else m1q3answer = answer;
      }
      if (otherBtn1.components['gui-radio'].data.checked && otherBtn1.id !== thisId) otherBtn1.emit('click');
      if (otherBtn2.components['gui-radio'].data.checked && otherBtn2.id !== thisId) otherBtn2.emit('click');
      if (otherBtn3.components['gui-radio'].data.checked && otherBtn3.id !== thisId) otherBtn3.emit('click');
      if (otherBtn4.components['gui-radio'].data.checked && otherBtn4.id !== thisId) otherBtn4.emit('click');
      if (otherBtn5.components['gui-radio'].data.checked && otherBtn5.id !== thisId) otherBtn5.emit('click');
      } 
      else {
        if (!(otherBtn1.components['gui-radio'].data.checked || otherBtn2.components['gui-radio'].data.checked
            || otherBtn3.components['gui-radio'].data.checked || otherBtn4.components['gui-radio'].data.checked || otherBtn5.components['gui-radio'].data.checked)) {
        nextBtn.setAttribute('scale', '0.01 0.01 0.01');
        console.log('Next button scaled down')
        }
      }
}
    
var nextListener = (a) => {
    let btn = a.path.find(item => item.tagName.toLowerCase() === 'a-gui-button');
    
    //Encontramos qué opción se ha seleccionado
    
    switch (btn.id) {
      case 'm1-q1-next': 
        // Se trae el id de la primera pantalla para escalarla a 0
        let pantalla1 = document.getElementById('Contenedor1');
        let pantalla_nueva1 = document.getElementById('Respuesta1');
        let pantalla_nueva2 = document.getElementById('Respuesta2');
        let pantalla_nueva3 = document.getElementById('Respuesta3');
        let pantalla_nueva4 = document.getElementById('Respuesta4');
        let pantalla_nueva5 = document.getElementById('Respuesta5');
        pantalla1.setAttribute('scale', '0.001 0.001 0.001');
        btn.setAttribute('scale', '0.001 0.001 0.001');

        let opcion1 = document.getElementById('m1-q1-a1');
        let opcion2 = document.getElementById('m1-q1-a2');
        let opcion3 = document.getElementById('m1-q1-a3');
        let opcion4 = document.getElementById('m1-q1-a4');
        let opcion5 = document.getElementById('m1-q1-a5');

        //Aparece la nueva pantalla
        if(opcion1.components['gui-radio'].data.checked) {pantalla_nueva1.setAttribute('scale', '1 1 1');} 
        else if(opcion2.components['gui-radio'].data.checked) {pantalla_nueva2.setAttribute('scale', '1 1 1');} 
        else if(opcion3.components['gui-radio'].data.checked) {pantalla_nueva3.setAttribute('scale', '1 1 1');} 
        else if(opcion4.components['gui-radio'].data.checked) {pantalla_nueva4.setAttribute('scale', '1 1 1');} 
        else if(opcion5.components['gui-radio'].data.checked) {pantalla_nueva5.setAttribute('scale', '1 1 1');} 
        else {pantalla_nueva1.setAttribute('scale', '1 1 1');} 
        
        firstSubmitted = true;
        break;

      case 'm1-q2-next': 
        let pantalla2 = document.getElementById('Respuesta4');
        let pantalla2_nueva1 = document.getElementById('Respuesta4_1');
        let pantalla2_nueva2 = document.getElementById('Respuesta4_2');

        pantalla2.setAttribute('scale', '0.001 0.001 0.001');
        btn.setAttribute('scale', '0.001 0.001 0.001');

        let opcion1_2 = document.getElementById('m1-q2-a1');
        let opcion2_2 = document.getElementById('m1-q2-a2');
        let opcion3_2 = document.getElementById('m1-q2-a3');
        let opcion4_2 = document.getElementById('m1-q2-a4');

        if(opcion1_2.components['gui-radio'].data.checked) {pantalla2_nueva1.setAttribute('scale', '1 1 1');} 
        else if(opcion2_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 
        else if(opcion3_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 
        else if(opcion4_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 


        secondSubmitted = true;
        break;
    }
}



function genericListener2(id) {
    console.log('Generic listener');
    var thisId = id;
    var thisToggle = document.getElementById(thisId);
    var thisToggleComponent = thisToggle.components['gui-radio'];
    if (!thisToggleComponent) thisToggleComponent = thisToggle;
    console.log(thisToggleComponent.data.checked);
    var thisToggleComponentChecked = thisToggleComponent.data.checked;
    
    let idComps = thisId.split('-');
    let otherBtn1 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a1'),
        otherBtn2 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a2'),
        otherBtn3 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a3');
        otherBtn4 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a4');
        otherBtn5 = document.getElementById(idComps[0] + '-' + idComps[1] + '-a5');
    let nextBtn = document.getElementById(idComps[0] + '-' + idComps[1] + '-next');
    let answer = thisToggle.getAttribute('value');
    if (!thisToggleComponentChecked) {
      nextBtn.setAttribute('scale', '1 1 1');
      console.log('Next btn scaled up')
      if (idComps[0] === 'm1')  {
        if (idComps[1] === 'q1') m1q1answer = answer;
        else if (idComps[1] === 'q2') m1q2answer = answer;
        else m1q3answer = answer;
      }
      if (otherBtn1.components['gui-radio'].data.checked && otherBtn1.id !== thisId) otherBtn1.emit('click');
      if (otherBtn2.components['gui-radio'].data.checked && otherBtn2.id !== thisId) otherBtn2.emit('click');
      if (otherBtn3.components['gui-radio'].data.checked && otherBtn3.id !== thisId) otherBtn3.emit('click');
      if (otherBtn4.components['gui-radio'].data.checked && otherBtn4.id !== thisId) otherBtn4.emit('click');
      if (otherBtn5.components['gui-radio'].data.checked && otherBtn5.id !== thisId) otherBtn5.emit('click');
    } 
    else {
        if (!(otherBtn1.components['gui-radio'].data.checked || otherBtn2.components['gui-radio'].data.checked
            || otherBtn3.components['gui-radio'].data.checked || otherBtn4.components['gui-radio'].data.checked || otherBtn5.components['gui-radio'].data.checked)) {
        nextBtn.setAttribute('scale', '0.01 0.01 0.01');
        console.log('Next button scaled down')
        }
    }
}

function nextListener2(id) {
  let btn = document.getElementById(id);
  
  //Encontramos qué opción se ha seleccionado
  
  switch (btn.id) {
    case 'm1-q1-next': 
      // Se trae el id de la primera pantalla para escalarla a 0
      let pantalla1 = document.getElementById('Contenedor1');
      let pantalla_nueva1 = document.getElementById('Respuesta1');
      let pantalla_nueva2 = document.getElementById('Respuesta2');
      let pantalla_nueva3 = document.getElementById('Respuesta3');
      let pantalla_nueva4 = document.getElementById('Respuesta4');
      let pantalla_nueva5 = document.getElementById('Respuesta5');
      pantalla1.setAttribute('scale', '0.001 0.001 0.001');
      btn.setAttribute('scale', '0.001 0.001 0.001');

      let opcion1 = document.getElementById('m1-q1-a1');
      let opcion2 = document.getElementById('m1-q1-a2');
      let opcion3 = document.getElementById('m1-q1-a3');
      let opcion4 = document.getElementById('m1-q1-a4');
      let opcion5 = document.getElementById('m1-q1-a5');

      //Aparece la nueva pantalla
      if(opcion1.components['gui-radio'].data.checked) {pantalla_nueva1.setAttribute('scale', '1 1 1');} 
      else if(opcion2.components['gui-radio'].data.checked) {pantalla_nueva2.setAttribute('scale', '1 1 1');} 
      else if(opcion3.components['gui-radio'].data.checked) {pantalla_nueva3.setAttribute('scale', '1 1 1');} 
      else if(opcion4.components['gui-radio'].data.checked) {pantalla_nueva4.setAttribute('scale', '1 1 1');} 
      else if(opcion5.components['gui-radio'].data.checked) {pantalla_nueva5.setAttribute('scale', '1 1 1');} 
      else {pantalla_nueva1.setAttribute('scale', '1 1 1');} 
      
      firstSubmitted = true;
      break;

    case 'm1-q2-next': 
      let pantalla2 = document.getElementById('Respuesta4');
      let pantalla2_nueva1 = document.getElementById('Respuesta4_1');
      let pantalla2_nueva2 = document.getElementById('Respuesta4_2');

      pantalla2.setAttribute('scale', '0.001 0.001 0.001');
      btn.setAttribute('scale', '0.001 0.001 0.001');

      let opcion1_2 = document.getElementById('m1-q2-a1');
      let opcion2_2 = document.getElementById('m1-q2-a2');
      let opcion3_2 = document.getElementById('m1-q2-a3');
      let opcion4_2 = document.getElementById('m1-q2-a4');

      if(opcion1_2.components['gui-radio'].data.checked) {pantalla2_nueva1.setAttribute('scale', '1 1 1');} 
      else if(opcion2_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 
      else if(opcion3_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 
      else if(opcion4_2.components['gui-radio'].data.checked) {pantalla2_nueva2.setAttribute('scale', '1 1 1');} 


      secondSubmitted = true;
      break;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("FAQ");  
  const abrir_FAQ = document.querySelector('#guardia');
  const faq = document.querySelector('#FAQ');
  const cerrar_FAQ = document.querySelector('#cerrar_FAQ');    
  
  if (abrir_FAQ) abrir_FAQ.addEventListener('click', function (e) {
    faq.setAttribute('scale', '1 1 1');
  });
  
  if (cerrar_FAQ) cerrar_FAQ.addEventListener('click', function (e) {
    faq.setAttribute('scale', '0 0 0');
  });

  const retroceder_R1 = document.querySelector('#atras_R1');
  const retroceder_R2 = document.querySelector('#atras_R2');
  const retroceder_R3 = document.querySelector('#atras_R3');
  const retroceder_R4 = document.querySelector('#atras_R4');
  const retroceder_R5 = document.querySelector('#atras_R5');
  const Respuesta1 = document.querySelector('#Respuesta1');
  const Respuesta2 = document.querySelector('#Respuesta2');
  const Respuesta3 = document.querySelector('#Respuesta3');
  const Respuesta4 = document.querySelector('#Respuesta4');
  const Respuesta5 = document.querySelector('#Respuesta5');

  const retroceder_R4_1 = document.querySelector('#atras_R4_1');
  const retroceder_R4_2 = document.querySelector('#atras_R4_2');
  const Respuesta4_1 = document.querySelector('#Respuesta4_1');
  const Respuesta4_2 = document.querySelector('#Respuesta4_2');


  const Pantalla1 = document.querySelector('#Contenedor1');

  if (retroceder_R1) retroceder_R1.addEventListener('click', function (e) {
      Respuesta1.setAttribute('scale', '0.001 0.001 0.001');
      Pantalla1.setAttribute('scale', '1 1 1');
  })
        
  if (retroceder_R2) retroceder_R2.addEventListener('click', function (e) {
      Respuesta2.setAttribute('scale', '0.001 0.001 0.001');
      Pantalla1.setAttribute('scale', '1 1 1');
  })

  if (retroceder_R3) retroceder_R3.addEventListener('click', function (e) {
      Respuesta3.setAttribute('scale', '0.001 0.001 0.001');
      Pantalla1.setAttribute('scale', '1 1 1');
  })

  if (retroceder_R4) retroceder_R4.addEventListener('click', function (e) {
      Respuesta4.setAttribute('scale', '0.001 0.001 0.001');
      Pantalla1.setAttribute('scale', '1 1 1');
   })

  if (retroceder_R5) retroceder_R5.addEventListener('click', function (e) {
      Respuesta5.setAttribute('scale', '0.001 0.001 0.001');
      Pantalla1.setAttribute('scale', '1 1 1');
  })

  if (retroceder_R4_1) retroceder_R4_1.addEventListener('click', function (e) {
      Respuesta4_1.setAttribute('scale', '0.001 0.001 0.001');
      Respuesta4.setAttribute('scale', '1 1 1');
  })

  if (retroceder_R4_2) retroceder_R4_2.addEventListener('click', function (e) {
      Respuesta4_2.setAttribute('scale', '0.001 0.001 0.001');
      Respuesta4.setAttribute('scale', '1 1 1');
  })
})