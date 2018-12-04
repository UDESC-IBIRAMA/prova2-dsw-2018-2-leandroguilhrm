//Buscando os elementos
const campoBusca    = document.getElementById('busca');
const btnBuscar     = document.getElementById('btnBuscar');
const boxResultados = document.getElementById('resultados');

//Evento click btnSalvar
btnBuscar.addEventListener('click', function(){
   fetch('https://swapi.co/api/vehicles/?search=' + campoBusca.value)
           .then(function(results){
                let html = '';
                
                console.log(results);
                
                boxResultados.innerHTML = html;
            });
});