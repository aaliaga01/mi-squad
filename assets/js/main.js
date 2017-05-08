

function nuevoMiembro(nombre,edad,hobbie){
	this.imagen = new Image();
	this.nombre=nombre;
	this.edad=edad;
	this.hobbie=hobbie;
}

//-----------------------------Se agregan los miembros de mi squad
var miSquad=[];

	var gaby = new nuevoMiembro("Gaby Bravo",28,["Pintar"," Ver animes"," Jugar Aion"]);
	miSquad.push(gaby);

	var karina = new nuevoMiembro("Karina Laroze",21,["Bailar"]);
	miSquad.push(karina);

	var mily = new nuevoMiembro("Mily Rivas",18,["Leer"," Ver películas"]);
	miSquad.push(mily);

	var marcela = new nuevoMiembro("Marcela Orellana",31,["Andar en bicicleta"," Ver series coreanas"]);
	miSquad.push(marcela);

	var patricia = new nuevoMiembro("Patricia Zavala",28,["Cantar"]);
	miSquad.push(patricia);

//----------------------------creando elementos html con DOM

//Referencia al contenedor principal en HTML donde se imprimiran los datos
var contenedor = document.getElementById("contenedor");

//Se crea el titulo 
var h1 = document.createElement("h1");
h1.innerHTML = "Las Pochoclos";
contenedor.appendChild(h1);



miSquad.forEach(function(el){

var divMiembro = document.createElement("div");//Se crea div
	divMiembro.setAttribute("id","integrante");//Se le asigna una clase al div
	contenedor.appendChild(divMiembro);//se imprime div en html

var divComent = document.createElement("div");//se crea div contenedor de comentarios
	divComent.setAttribute("id","comentario");//se le asigna id y nombre
	contenedor.appendChild(divComent);//se coloca en el div "contenedor"

var imagen= document.createElement("img");//se crea elemento imagen
	imagen.setAttribute("id","foto");//se le un id 
	imagen.setAttribute("src","assets/img/fotoM.png");//se escribe ruta
	divMiembro.appendChild(imagen);//se agrega al html

var divTexto= document.createElement("textarea");//se crea cuadro de texto para comentarios
	divTexto.setAttribute("id","comentar");//se le da un id y nombre
	divComent.appendChild(divTexto);//se coloca dentro del div "comentario"

var boton = document.createElement("button");//Se crea boton
	boton.setAttribute("id","caja-boton");//se le da un id y nombre
	boton.onclick = function(){//con esto funciona al hacer click
 			return document.getElementById("mostrarComentario").value;
 		}
	boton.innerText = "enviar";//texto que mostrara el boton
	divComent.appendChild(boton);//Se indica donde se quiere agregar el boton creado

var mostrarTexto= document.createElement("div");//div vacio donde se mostrara lo comentado
	mostrarTexto.setAttribute("id","mostrarComentario");//se da un id al div
	divComent.appendChild(mostrarTexto);//se coloca junto con los elementos de comentario

		divMiembro.innerHTML += "<p> Nombre: " + el.nombre + "</br>"
		+ "Edad: " + el.edad + " años" + "</br>" + "Hobbie: " + el.hobbie + "</p>"
		
		});






