const botoes = document.querySelectorAll(".numbers button");

function show(a){
	console.log(a);
}


for(let x = 0; x<botoes.length; x++){
	botoes[x].onclick=(e)=>console.log(e.target.innerText);
}


//const exibir = document.querySelectorAll(".screen");

//function exibir(screen){
//	console.log(screen);
//}

//console.log(screen);





//document.getElementById("num9");
//console.log(screen);





//const operadores = document.quarySelectorAll(".operators button");
//const opSoma = operadores[3];
