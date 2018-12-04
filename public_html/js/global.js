//Criando array
let titulos = [];

//Buscando os elementos
const campoTitulo   = document.getElementById('titulo');
const btnSalvar     = document.getElementById('btnSalvar');
const btnResultados = document.getElementById('btnResultados');
const boxResultados = document.getElementById('resultados');

//Evento click btnSalvar
btnSalvar.addEventListener('click', function(){
   console.log(campoTitulo.value); 
   titulos.push(campoTitulo.value);
   campoTitulo.value = '';
});

//Evento click btnResultados
btnResultados.addEventListener('click', function(){
    let html = '<table border="1">';
    
    titulos.forEach(function(i){
        html    += '<tr><td>' + i + '</td></tr>';
    });
    
    html    += '</table>';
    boxResultados.innerHTML = html;
});