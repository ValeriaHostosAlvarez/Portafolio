
let convertir=function(){
let grados=document.getElementById("grados").value
let opcion1=document.getElementById("opcion1").value
opcion1=parseInt(opcion1)
let opcion2=document.getElementById("opcion2").value
opcion2=parseInt(opcion2)
let convertir

  if (opcion1===2 && opcion2===1){
    	grados=parseFloat(grados)
    	convertir=(((grados-32)*5)/9)
    	alert("  "+grados+" Fahrenheit equivalen a " +convertir.toFixed(2)+ "  Celsius")
    }
    else if (opcion1===1 && opcion2===3){
    	convertir=(parseFloat(grados)+273.15)
    	alert("  "+grados+" Celsius equivalen a "+convertir.toFixed(2)+"  Kelvin")
    }
    else if (opcion1===3 && opcion2===1){
    	convertir=(parseFloat(grados)+273.15)
    	alert("  "+grados+" Kelvin equivalen a " +convertir.toFixed(2)+" Celsius")
    }
    else if (opcion1===3 && opcion2===2){
    	convertir=parseFloat((grados)-273.15*(9/5)+32)
    	alert("  "+grados+" Kelvin equivalen a "+convertir.toFixed(2)+"  Fahrenheit")
    }
    else if (opcion1===2 && opcion2===3){
    	convertir=(parseFloat((grados)-32)*(9/5)+273.15)
    	alert("  " +grados+" Fahrenheit equivalen a " +convertir.toFixed(2)+ "Kelvin")
    }
    else if (opcion1===1 && opcion2===2){
    	convertir=(parseFloat((grados)*9/5)+32)
    	alert("  "+grados+" Celsius equivalen a "+convertir.toFixed(2)+ "  Fahrenheit")
    } 
    else
    	alert("Ingrese una opcion valida")
}