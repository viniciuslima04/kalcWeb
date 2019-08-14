const botoes = document.querySelectorAll(".numbers button");

const screen = document.querySelector(".screen");

const limpar = document.querySelector(".numbers #limpar");

const operadores = document.querySelectorAll(".operators button");

const operacoes = document.querySelectorAll(".operators button #divisao #multiplicacao #subtracao #soma");

const result = document.querySelectorAll(".operators button #result");

// Mostrar na tela da calculadora
function show(a){
	console.log(a);
	screen.innerText += a;
}

for(let x = 0; x<botoes.length; x++){
	botoes[x].onclick = (e) => show(e.target.innerText);
}

// Limpra tela
limpar.onclick = (e) => delet();

function delet(){
	screen.innerText = "";
}

// Mostrar Operadores
for (let x = 0; x<operadores.length; x++) {
	operadores[x].onclick = (e) => show(e.target.innerText);
}

//Operações matemáticas
function calcule (){
	var n1; var n2; 
	switch(operacoes){ 

		case'soma':
		n1 + n2;
		console.log(result);
		break;

		case'subtracao':
		n1 / n2;
		console.log(result);
		break;

		case'multiplicacao':
		n1 * n2;
		console.log(result);
		break;

		case'divisao':
		n1 - n2;
		console.log(result);
	}

	console.log(result);
}

function resultado (result) {
	console.log(result);
}

for (let x = 0; x<result.length; x++) {
	result[x].onclick = (e) => show(e.target.innerText);
}

//document.getElementById("num9");
//console.log(screen);

//const operadores = document.quarySelectorAll(".operators button");
//const opSoma = operadores[3];
