document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(e) {
  e.preventDefault();
  let usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;

  }

 // if(usuario == ) {
   // alert(' Su usuario es correcto');
    //return;
  //}
/*
  let clave = document.getElementById('clave').value;
  if (clave.length < 6)  {
    alert('La clave no es válida,ingresa más de 6 caractéres');
    //fe1=document.querySelector('#formulario .feedback')
    //fe1.textContent="La clave no es válida"
    return;
  }
  const validacionMayuscula = /[A-Z]/
  if(!validacionMayuscula.test(clave)){
    alert('La contraseña debe tener al menos una mayúscula');
     return;
  }

const validacionMinuscula = /[a-z]/
  if(!validacionMinuscula.test(clave)){
    alert('La contraseña debe tener al menos una minúscula');
     return;
  }

const validacioncaracterespecial = /[!@#$%^&*()_+.]/
  if(!validacioncaracterespecial.test(clave)){
    alert('La contraseña debe tener al menos un caracter especial');
     return;
  }
*/
 // EJERCICIO VALIDANDO UNA PALÁBRA CON mayus y minus y caracteres especiales
/*
  const validarmurcielago= /([A-ZÁÉÍÓÚ]+[\s][ñ][a-zñáéíóú] {5,10})/
 // const validarmurcielago= /([0-9])/
  if (validarmurcielago.test(usuario)){
       alert('La palabra que escribiste es incorrecta');
       return;
}

else{
  alert('La palabra es correcta')
  return;
}
*/
// EJERCICIO VALIDANDO Dirección 

 const validardireccion= /^(A-Zz-a)(\s)(\d)+(\s)(#\s)(\d)+-(\d)+$/
  if (validardireccion.test(usuario)){
       alert('La dirección que escribiste es correcta');
       return;
}

else{
  alert('La dirección es incorrecta')
  return;
}

  /* 1. validar contraseña que tenga una mayuscula una minuscula y numeros y 
  de tamaño mayor a 6 caracteres.
  2. ingresar un usuario y contraseña predeterminada y realizar validación
  a. si es correcto que muestre la pagina.
  b. si es incorrecto que aperezca mensaje de datos errados ya sea usuario 
  o clase o los dos*/
 

  this.submit();
}

/*
const form=document.querySelector('#formulario').value
const fe1=document.querySelector('#camponoDoc.feedback')

const numero=/^[0-9]{5,15}/

form.noDoc.addEvenListener('input',e =>{
  e.preventDefault()

  if(numero.test(e.target.value)){
    form.noDoc.setAttribute("class", "success")
    fe1.textContent=""
    fe1.style.setProperty("visibility", "hidden")
    fe1.style.setProperty("opacity", "0")
  }

  else{
    form.noDoc.setAttribute("class","error")
    fe1.textContent="El valor no es numérico y/o no tiene entre 5 y 15 caracteres"
    fe1.style.setAttribute("visibility", "visible")
    fe1.style.setAttribute("opacity", "1")
  }
})
*/
