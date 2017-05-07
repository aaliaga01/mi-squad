function nuevoMiembro(nombre,edad,hobbie){
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

			var boton = document.createElement("button");//Se crea boton
			boton.setAttribute("id","caja-boton");
			boton.onclick = function(){//con esto funciona al hacer click
 			alert("hellou");}
			//document.getElementById("caja-boton").onclick();
			//boton.setAttribute("onclick");
			boton.innerText = "comentar";//texto que mostrara el boton
			document.getElementById("contenedor").appendChild(boton);//Se indica donde se quiere agregar el boton creado
			

		divMiembro.innerHTML += "<p> Nombre: " + el.nombre + "</br>"
		+ "Edad: " + el.edad + " años" + "</br>" + "Hobbie: " + el.hobbie + "</p>"
		 + "<hr>"

		});

