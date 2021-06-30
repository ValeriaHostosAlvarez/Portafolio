botonBuscar.addEventListener('click',e=>{
	e.preventDefault()

	let dia=document.getElementById('dia').value
	dia=parseInt(dia)

	let mes=document.getElementById('mes').value
	mes=parseInt(mes)

	let signo=document.getElementById('signo')


	if((dia>=21 && mes==3) || (dia<=20 && mes==4)){
		texto=`<p> Aries: Eres un líder inhato </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

	 if((dia>=21 && mes==4) || (dia<=20 && mes==5)){
		texto=`<p> Tauro: Eres agradecid@ y muy amoros@></p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	
	 if((dia>=21 && mes==5) || (dia<=20 && mes==6)){
		texto=`<p> Géminis: Eres adaptativo y equilibrado </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}

	if((dia>=22 && mes==6) || (dia<=22 && mes==7)){
		texto=`<p> Cáncer: Eres amante del hogar </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=23 && mes==7) || (dia<=23 && mes==8)){
		texto=`<p> Leo: Representas el poder y la exhuberancia </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=24 && mes==8) || (dia<=22 && mes==9)){
		texto=`<p> Virgo: De mente clara, aguda y racional </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=23 && mes==9) || (dia<=22 && mes==10)){
		texto=`<p> Libra: Siempre busca el equilibrio </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=23 && mes==10) || (dia<=22 && mes==11)){
		texto=`<p> Escorpio: De una personalidad audaz </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=23 && mes==11) || (dia<=21 && mes==21)){
		texto=`<p> Sagitario: Podrías analizar mejor las cosas <img src="images/aries.png"> </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=22 && mes==12) || (dia<=20 && mes==1)){
		texto=`<p> Capricornio: Eres muy práctico </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=21 && mes==1) || (dia<=19 && mes==2)){
		texto=`<p> Acuario: Te ocupas de todo tipo de causas </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}
	if((dia>=20 && mes==2)|| (dia<=20 && mes==3)){
		texto=`<p> Pisis: Eres honesto y desinteresado </p>`
		signo.innerHTML=texto
		signo.style.setProperty("visibility", "visible")
		signo.style.setProperty("opacity", "1")
		signo.style.setProperty("transition","all 1s ease 1s")
		}

	else {
		texto=`<p> Elige tu fecha de día y mes de Nacimiento </p>`
		
		}

})