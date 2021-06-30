 
// solicitar las entradas que son nombre y apellido input tipo textc ada uno debe tener
// un id js realizar el proceso

// ojo ejercicio de los primeros con jennifer`

let calcularLongitud=function Longitud(){
	let palabra=document.getElementById("palabra").value
	alert("La extensión de la palabra es: " +palabra+ "\n es " +palabra.length+ "letras")
	}

// let calcularLongitud=function Longitud(){
//	let apellido=document.getElementById("apellido").value
//	alert("La extensión de la palabra" +apellido+ "\n es " +apellido.length+ "letras")
//	}


let convertirMayus=function Mayúscula(){
	let palabra=document.getElementById("palabra").value
	let mayuscula=palabra.toUpperCase()
	alert("En Mayúscula es: " +mayuscula)
	}

let convertirMinus=function Minúscula(){
	let palabra=document.getElementById("palabra").value
	let minuscula=palabra.toLowerCase()
	alert("En Minúscula es: " +minuscula)
	}

let extraerIncial=function Inicial(){
	let palabra=document.getElementById("nombre").value
	let inicial=palabra.substring(0,1)
	alert("La Inicial de la palabra es: " +inicial)
	}

let concatenar=function concat(){
	let nombre=document.getElementById('nombre').value
	let Apellido=document.getElementById('apellido').value
	let texto=nombre.concat(" ",Apellido)
	alert ("La palabras unidas son: " +texto)

	}


 /*let opcion=document.getElementById("opción").value
	if(opcion===1){
	alert("la opción seleccionada es" +opcion)
}
*/





