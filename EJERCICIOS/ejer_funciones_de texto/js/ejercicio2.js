
let totalllamada=function (){
	let cantidadmints=document.getElementById('cantminutos').value
	//cantidadmints=parseInt(cantidadmints)

	let tipollamada=document.getElementById('tipollamada').value
	//tipollamada=parseInt(tipollamada)



	let valorllamada
	let celular=300
	let fijo=200


  if(cantidadmints.length == "0") {
    alert('No has escrito cantidad de mints');
		}

	if (tipollamada== "0"){
		alert ('seleccion un tipo de llamada');
		} 

	else if(tipollamada=== 1){
		valorllamada= cantidadmints*200
		alert('El valor a pagar es:' +valorllamada)
		}


	else{
		valorllamada= cantidadmints*300
		alert('El valor a pagar es:' +valorllamada)
	}
}