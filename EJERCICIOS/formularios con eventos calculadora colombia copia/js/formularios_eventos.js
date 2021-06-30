const form=document.getElementById('form')
const input=document.getElementById('input')
//const button=document.getElementById('button')
//const link=document.getElementById('link')
//link=addEventListener('click')


//enviarlo como parámetro a la funcion
 input.addEventListener('keyup',(e)=>{
 	console.log(input.value)
 	console.log(e) // esto es un parametro de (e)  me va a mostrar todas las propiedades generales de input
	console.log(e.target.attributes[1].nodeValue);
	 })



 // también lo puedo hacer de la siguinte manera
 /*
  window.addEventListener('click',(e)=>{
 	console.log(e.key) // mostrar letra que pulsa
  	console.log(e)
	})

 */
 /*

 window.addEventListener('keyup',(e)=>{
 	console.log(e.key) // cuando cambio el key por otra variable me va a mostar el resultado de lo que hay dentro
 	console.log(e)
 	})
*/
/*
 button.addEventListener('click',(e)=>{
	console.log(e)
 	})

*/

 // CODIGO PARA LA CAJITA DE NUMEROS QUE SE QUEDAN LOS BOTONES DE OTRO COLOR

const gallery=document.getElementById("gallery")

gallery.addEventListener('click',(e)=>{
	console.log(e)
	console.log(e.target.textContent);
	e.target.classList.add('red');
})


//const form=document.getElementById('form')
//const input=document.getElementById('input')
//const button=document.getElementById('button')
//const link=document.getElementById("link")

/*
 link.addEventListener('click',(e)=>{
 	console.log('prueba')

 })
 // aqui puedo hacer el evento 
*/

form.addEventListener('submit',(e)=>{
	//decirle el evento que no ejecute
	e.preventDefault()
	console.log ("se envio la informacion ")
	//seobliga a que el evento suceda
})



