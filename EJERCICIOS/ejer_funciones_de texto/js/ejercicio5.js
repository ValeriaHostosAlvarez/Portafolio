function calculartriangulo(){
	let lado1=document.getElementById('l1').value
	let lado2=document.getElementById('l2').value
	let lado3=document.getElementById('l3').value
	

if(lado1 && lado2 && lado3){
	
}else{
	alert("OJO!!, falta alguno de los lados...")
	return;
}


if(lado1.length>4 || lado2.length>4 || lado3.length>4){
	alert("OJO!!, está ingresando más de 4 cifras...")
	return;
}

lado1=parseInt(lado1)
lado2=parseInt(lado2)
lado3=parseInt(lado3)

/*let validarcaracteres= /([0,9]){4}/
  if (validarcaracteres.test(l1) || validarcaracteres.test(l1) ){
       alert('Escribiste 4 caracteres');
       return
   }
   else{
  alert('Escribe máximo 4 caracteres')
  return
  }*/
 
if ((lado1==lado2 ) && (lado2==lado3) && (lado3==lado1)){
 	alert("Su triángulo es Equilatero")
 	}	

else if ((lado1==lado2 && lado2!==lado3)||(lado1==lado3 && lado2!= lado1)||(lado2==lado3 && lado1!=lado2)){
 	alert("Su triángulo es Isóseles")
	}

else if ((lado1!==lado2) && (lado2!=lado3)){
	alert("Su triángulo es Escaleno")
	}
}