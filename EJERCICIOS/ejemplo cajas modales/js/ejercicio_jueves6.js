boton.addEventListener('click',e=>{
	e.preventDefault()

	let nombre=document.getElementById('nombre').value
	nombre=parseInt(nombre)

	let apellido=document.getElementById('apellido').value
	apellido=parseInt(apellido)


	let correcto=document.getElementById('correcto')

	if(nombre==1 && apellido==3){
		texto=`<p> La respuesta es correcta <img src="images/cheque.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition","all 1s ease 1s")
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}
	else if(nombre==2 && apellido==1){
		texto=`<p> La respuesta es correcta <img src="images/cheque.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition","all 1s ease 1s")
		}
	
	else if(nombre==3 && apellido==2){
		texto=`<p> La respuesta es correcta <img src="images/cheque.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition","all 1s ease 1s")
		}

	else {
		texto=`<p> La respuesta es incorrecta <img src="images/incorrecto.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition","all 1s ease 1s")
		}

})
// AqQUI COMIENZA LA FUNCION DE  DE LA SEGUNDA CAJA ACERTIJO

num3.addEventListener('click',e=>{
		e.preventDefault() // prevent default funciona para que no muestre la funcion de una.


let respuesta=document.getElementById('acertijo')

 texto=`<p> La respuesta es incorrecta <img src="images/incorrecto.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition","all 1s ease 1s")
})


num4.addEventListener('click',e=>{
		e.preventDefault()	

let respuesta=document.getElementById('acertijo')
	

		texto=`<p> La respuesta es correcta <img src="images/cheque.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition","all 1s ease 1s")

})

num5.addEventListener('click',e=>{
		e.preventDefault()

let respuesta=document.getElementById('acertijo')

		
		texto=`<p> La respuesta es incorrecta <img src="images/incorrecto.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition","all 1s ease 1s")
		ocultar.style.setProperty("visibility", "visible")
		
})

// AQUI COMIENZA LA FUNCION DEL REFRAN

boton1.addEventListener('click',e=>{
	e.preventDefault()

	let corriente=document.getElementById('corriente').value
	corriente=parseInt(corriente)

	let marea=document.getElementById('marea').value
	marea=parseInt(marea)

	let ola=document.getElementById('ola').value
	ola=parseInt(ola)

	let restradio=document.querySelector('input[name="restradio"]:checked').value
	restradio=parseInt(restradio)

	let refran=document.getElementById('refran')

if(restradio==1){
		texto=`<p> La respuesta es correcta <img src="images/cheque.png"></p>`
		refran.innerHTML=texto
		refran.style.setProperty("visibility", "visible")
		refran.style.setProperty("opacity", "1")
		refran.style.setProperty("transition","all 1s ease 1s")
	}

else {
		texto=`<p> La respuesta es incorrecta <img src="images/incorrecto.png"></p>`
		refran.innerHTML=texto
		refran.style.setProperty("visibility", "visible")
		refran.style.setProperty("opacity", "1")
		refran.style.setProperty("transition","all 1s ease 1s")
		}
})

// AQUI COMIENZA LA FUNCION DEL ADIVNANZAS

pista.addEventListener('click',e=>{
	e.preventDefault()

	let adivinanza=document.getElementById('adivinanza')
	let ocultar=document.getElementById("pista")
	texto=`<p> _A  G_I_ _ R R A_ </p>`
	adivinanza.innerHTML=texto
	adivinanza.style.setProperty("visibility", "visible")
	adivinanza.style.setProperty("opacity", "1")
	adivinanza.style.setProperty("transition","all 1s ease 1s")
	ocultar.style.setProperty("visibility", "hidden")

})


solucion.addEventListener('click',e=>{
	e.preventDefault()

	let adivinanza=document.getElementById('adivinanza')
	let ocultar=document.getElementById("solucion")

	texto=`<p> LA GUITARRA</p>`
	adivinanza.innerHTML=texto
    adivinanza.style.setProperty("visibility", "visible")
	adivinanza.style.setProperty("opacity", "1")
	adivinanza.style.setProperty("transition","all 1s ease 1s")
	ocultar.style.setProperty("visibility", "hidden")

})

