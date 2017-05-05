function nuevoMiembro(nombre,edad,hobbie){
	this.nombre=nombre;
	this.edad=edad;
	this.hobbie=hobbie;
}


const miSquad=[];

	const gaby = new nuevoMiembro("gaby",28,"pintar");
	miSquad.push(gaby);

	const karina = new nuevoMiembro("Karina",21,"bailar");
	miSquad.push(karina);

	const mily = new nuevoMiembro("mili",18,"ver peliculas");
	miSquad.push(mili);

	const marcela = new nuevoMiembro("marcela",31,"bicicleta");
	miSquad.push(marcela);

	const patricia = new nuevoMiembro("patricia",28,"cantar");
	miSquad.push(patricia);

document.getElementById("contenedor").innerHTML=miSquad;


/*Gaby Bravo, 28 años, pintar, ver animes y jugar Aion
Karina laroze, 21 años, bailar
Mily Rivas, 18 recién cumplidos, leer, ver películas
Marcela Orellana, 31 años, andar en bicicleta, ver series coreanas.
Patricia Zavala, 28 años, cantar*/