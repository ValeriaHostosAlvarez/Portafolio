
botonCarta.addEventListener('click',e=>{
	e.preventDefault()
	 debugger

let opcion1=document.getElementById('opcion1').value
	opcion1=parseInt(opcion1)

	if((opcion1==1) || (opcion5==5) || (opcion9==9)){
		texto=`<p> Signo de Fuego: Son líderes por naturaleza, llenos de vida, dinámicos, apasionados, impulsivos, confían en sí mismos, se hacen notar; son sinceros, optimistas y dominantes. </p>`
		opcion.innerHTML=texto
		opcion.style.setProperty("visibility", "visible")
		opcion.style.setProperty("opacity", "1")
		opcion.style.setProperty("transition","all 1s ease 1s")
		return;
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

		if((opcion2==2) || (opcion6==6) || (opcion10==10)){
		texto=`<p> Signo de Tierra: Son constantes, prácticos, realistas, trabajadores y responsables; tienden a proteger y conservar lo que consiguen. </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
		return;
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

		if((opcion4==4) || (opcion8==8) || (opcion12==12)){
		texto=`<p> Signo de Agua: Son constantes, prácticos, realistas, trabajadores y responsables; tienden a proteger y conservar lo que consiguen. </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
		return;
		}

		else ((opcion3==3) || (opcion7==7) || (opcion11==11)){
		texto=`<p> Signo de Aire: Les gusta razonar, debatir, planificar. Son comunicadores, analíticos y tienen cierta dificultad para demostrar lo que sienten.  </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

	})