// ésta parte document.addEventListener sirve para quitar onclick en "html onclick="calculadora()""

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formularioC").addEventListener('submit', calculadora); 
});

// ésta es otra forma en la que se puede traer en onclik que quitamos de html:
//asignando a una variable 'formulario' el evento que tenía en la etiqueta form en html.

//document.addEventListener("DOMContentLoaded", function() {
//const formulario=document.getElementById('formularioC')
//formulario.addEventListener('submit', calcular)


function calculadora(){

	let num1=document.getElementById('num1').value
	num1=parseInt(num1)

	let num2= document.getElementById('num2').value
	num2=parseInt(num2)

	let operacion=document.getElementById('operacion').value
	operacion=parseInt(operacion)
	

switch(operacion){

	case 1: 
	resultado=num1+num2
	alert("El resutado de la suma es:" +resultado)
	break;


	case 2:
	resultado=num1-num2
	alert("El resutado de la resta es:" +resultado)
	break;

	case 3:
	resultado=num1*num2
	alert("El resutado de la multiplicación es:" +resultado)
	break;


	case 4:
	resultado=num1/num2
	alert("El resutado de la división es:" +resultado)
	break;

	}

	}
