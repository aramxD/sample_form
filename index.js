document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
      if (event.target.value != "") {
        event.target.nextElementSibling.classList.add("filled");
      } else {
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });


let idioma =  document.getElementById('idioma')
let btnIdioma = document.getElementById('btnIdioma')

let bienvenidaH3 = document.getElementById('welcome')
let bienvenida_ENG ='Contact us today to schedule a free demo'
let bienvenida_ESP ='Contáctenos hoy para programar una demostración gratuita'

let input1 =document.getElementById('nombre_completo')
let label1 = document.querySelector('label[for="nombre_completo"]')
let input1_ENG ='Full Name'
let input1_ESP ='Nombre completo'

let input2 =document.getElementById('nombre_empresa')
let label2 = document.querySelector('label[for="nombre_empresa"]')
let input2_ENG ='Company name'
let input2_ESP ='Nombre de la Empresa'

let input3 =document.getElementById('email')
let label3 = document.querySelector('label[for="email"]')
let input3_ENG ='Company email'
let input3_ESP ='Correo Electronico'

let input4 =document.getElementById('telefono_empresa')
let label4 = document.querySelector('label[for="telefono_empresa"]')
let input4_ENG ='Company telephone'
let input4_ESP ='Telefono de la empresa'

let input5 =document.getElementById('extension_telefonica')
let label5 = document.querySelector('label[for="extension_telefonica"]')
let input5_ENG ='Telephone extention'
let input5_ESP ='Extension telefonica'

let input6 =document.getElementById('ciudad')
let label6 = document.querySelector('label[for="ciudad"]')
let input6_ENG ='City'
let input6_ESP ='Ciudad'

let input7 =document.getElementById('mensaje')
let label7 = document.querySelector('label[for="mensaje"]')
let input7_ENG ='Message'
let input7_ESP ='Mensaje'

let legendFieldset = document.getElementById('fieldsetLegend')
let legendFieldset_ENG ='Modules of your interest'
let legendFieldset_ESP ='Módulos de su interés'

let submitBtn = document.getElementById('submitBtn')
let submitBtn_ENG ='Submit demo request'
let submitBtn_ESP ='Enviar solicitud de la demostracion'

let idiomafinal = 'esp'
function idiomaActual(){
  return idiomafinal = idioma.value

}




function idiomaSeleccionado(){
  if(idiomafinal ==='esp'){
    bienvenidaH3.innerHTML = bienvenida_ESP
    input1.placeholder = input1_ESP
    label1.innerHTML = input1_ESP
    input2.placeholder = input2_ESP
    label2.innerHTML = input2_ESP
    input3.placeholder = input3_ESP
    label3.innerHTML = input3_ESP
    input4.placeholder = input4_ESP
    label4.innerHTML = input4_ESP
    input5.placeholder = input5_ESP
    label5.innerHTML = input5_ESP
    input6.placeholder = input6_ESP
    label6.innerHTML = input6_ESP
    input7.placeholder = input7_ESP
    label7.innerHTML = input7_ESP
    legendFieldset.innerHTML = legendFieldset_ESP
    submitBtn.innerHTML = submitBtn_ESP
    
    
  }else{
    bienvenidaH3.innerHTML = bienvenida_ENG
    input1.placeholder = input1_ENG
    label1.innerHTML = input1_ENG
    input2.placeholder = input2_ENG
    label2.innerHTML = input2_ENG
    input3.placeholder = input3_ENG
    label3.innerHTML = input3_ENG
    input4.placeholder = input4_ENG
    label4.innerHTML = input4_ENG
    input5.placeholder = input5_ENG
    label5.innerHTML = input5_ENG
    input6.placeholder = input6_ENG
    label6.innerHTML = input6_ENG
    input7.placeholder = input7_ENG
    label7.innerHTML = input7_ENG
    legendFieldset.innerHTML = legendFieldset_ENG
    submitBtn.innerHTML = submitBtn_ENG
     
  }
}
idiomaSeleccionado()
function cambioIdioma(){
  
  idiomaActual()
  idiomaSeleccionado()
}


idioma.addEventListener('change',cambioIdioma)