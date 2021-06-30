botonCorazon.addEventListener('click',e=>{
	e.preventDefault()

	let signo1=document.getElementById('signo1').value
	signo1=parseInt(signo1)

	let signo2=document.getElementById('signo2').value
	signo2=parseInt(signo2)

	let compatible=document.getElementById('compatible')


	if((signo1==1 && signo2==11) || (signo1==1 && signo2==3)){
		texto=`<p> Son Compatibles!: Aries, un signo de fuego, se caracteriza por su energía, es pionero, aventurero y valiente; además, es muy seguro de sí mimo. Por esa razón los signos con los que concuerdan más en el amor son Acuario y Géminis. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}


	 if((signo1==2 && signo2==4) || (signo1==2 && signo2==12)){
		texto=`<p> Son Compatibles!: Tauro es pacientes y persistentes, les encanta sentirse segurosy aman la fidelidad, pero también pueden ser celosos y posesivos. Su pareja ideal puede ser Cáncer o Piscis. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}
	
	 if((signo1==3 && signo2==1) || (signo1==3 && signo2==5)){
		texto=`<p> Son Compatibles!: Géminis es signo de aire; tiene que sentir la libertad. Estas personas se caracterizan por ser cariñosas e intelectuales, por lo que son afines a Aries y Leo. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==4 && signo2==6) || (signo1==4 && signo2==2)){
		texto=`<p> Son Compatibles!: Cáncer es signo de agua tiene muchos cambios de humor y es bastante reservado. Además, es trabajador, familiar, hogareño, fiable, leal y muy buena persona, por ello su pareja ideal son los signos de tierra, Virgo y Tauro. 

 </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==5 && signo2==3) || (signo1==5 && signo2==7)){
		texto=`<p> Son compatibles!: Leo es signo de fuego, es aventurero, seguro de sí mismo, generoso, fiel y cariñoso. Con Libra mantiene una relación equilibrada, con Géminis disfruta de las reuniones sociales </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==6 && signo2==8) || (signo1==6 && signo2==4)){
		texto=`<p> Son compatibles!: Virgo es signo de tierra es perfeccionista, inteligente, trabajador y práctico. Tiende a preocuparse excesivamente y a ser bastante crítico con los demás. Por eso, Escorpio y Cáncer son su mejor opción. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}
	if((signo1==7 && signo2==5) || (signo1==7 && signo2==9)){
		texto=`<p> Son compatibles!:Libra es signo de aire es elegante, analítico y sociable por eso se relaciona mejor con Leo y Sagitario. Además, por su curiosidad son excelentes amigos para Acuario y Géminis. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==8 && signo2==10) || (signo1==8 && signo2==6)){
		texto=`<p> Son compatibles!: Escorpio: Es signo de agua; apasionado, dogmático, emocional, profundo, por lo tanto, su pareja ideal es Capricornio o Virgo.  </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==9 && signo2==11) || (signo1==9 && signo2==7)){
		texto=`<p> Son compatibles!: Sagitario es un signo de fuego y suele ser aventurero, energético, optimista, seguro de sí mismo y simpático. Por ello simpatiza mejor con mejor manera con Acuario y Libra.  </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==10 && signo2==8) || (signo1==10 && signo2==12)){
		texto=`<p> Son compatibles!: Capricornio, signo de tierra es ambicioso, frío, calculador y previsible, lo que lo hace más cercano a Escorpio y Piscis.  </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	if((signo1==11 && signo2==1) || (signo1==11 && signo2==9)){
		texto=`<p> Son compatibles!:Acuario: signo de aire que se caracteriza por ser original, innovador, independiente y buen amigo. Por ello, su pareja ideal sería un Aries o un Sagitario. 

 </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

		
	if((signo1==12 && signo2==10)|| (signo1==12 && signo2==2)){
		texto=`<p> Son compatibles!: Pisis es signo de agua; imaginativo, sensible, tranquilo, paciente y espiritual, lo que lo acerca más a Capricornio y Tauro.  </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","all 1s ease 1s")
		return;
		}

	else {
		texto=`<p> Lo siento mucho, no son compatibles </p>`
		compatible.innerHTML=texto
	}



})


