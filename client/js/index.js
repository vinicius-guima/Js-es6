var campos = [ //array de cada input do form 
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')  
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    
   event.preventDefault(); //não recarrega
   
   var tr = document.createElement('tr');  // cria uma tr 
   
   campos.forEach(function(campo) {
       
       var td = document.createElement('td'); // cria uma td
       td.textContent = campo.value; //atribui o valor do array campos em cada iteração 
       tr.appendChild(td); // atrela a td criada a tr
   });
   
  var tdVolume = document.createElement('td'); // cria uma td
  tdVolume.textContent = campos[1].value * campos[2].value; // atribui o valor da multiplicação
                                                            //  dos campos a var = tdVolume
  
  tr.appendChild(tdVolume); // atrela a td a tr criada acima
  
  tbody.appendChild(tr); // adiciona a tr a tboby
  
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  
  campos[0].focus();
   
});