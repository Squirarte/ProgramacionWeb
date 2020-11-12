let  inicio = document.getElementById('inicio');
let arqui = document.getElementById('arqui');

function inicioP(){
     window.open('index.html', '_self');
}
function arquiP(){
	window.open('index-2.html', '_self');
}
inicio.addEventListener('click',inicioP);
arqui.addEventListener('click',arquiP);