function nuevoMiembro(nombre,edad,hobbie){
	this.nombre=nombre;
	this.edad=edad;
	this.hobbie=hobbie;
}


var miSquad=[];

	var gaby = new nuevoMiembro("gaby",28,"pintar");
	miSquad.push(gaby);

	var karina = new nuevoMiembro("Karina",21,"bailar");
	miSquad.push(karina);

	var mily = new nuevoMiembro("mily",18,"ver peliculas");
	miSquad.push(mily);

	var marcela = new nuevoMiembro("marcela",31,"bicicleta");
	miSquad.push(marcela);

	var patricia = new nuevoMiembro("patricia",28,"cantar");
	miSquad.push(patricia);

document.getElementById("contenedor").innerHTML=miSquad.length;
var pantalla = document.getElementById("contenedor");

miSquad.forEach(function(el){
		pantalla.innerHTML += "<p> Nombre: " + el.nombre + "</p>"
		+ "<p> Edad: " + el.edad + "</p>" + "<p> Hobbie: " + el.hobbie + "</p>" + "</br>"

		});




/*
var titulo = document.getElementById("lista");//aqui se va imprimir
	elementos.forEach(function(valor){ // forEach +  para que recorra
      titulo.innerHTML += '<li>' + valor.title + '</li>';


Gaby Bravo, 28 años, pintar, ver animes y jugar Aion
Karina laroze, 21 años, bailar
Mily Rivas, 18 recién cumplidos, leer, ver películas
Marcela Orellana, 31 años, andar en bicicleta, ver series coreanas.
Patricia Zavala, 28 años, cantar*/