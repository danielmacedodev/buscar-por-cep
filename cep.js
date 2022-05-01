'use strict ';

var  limparformulario = (endereco)=> {

   document.getElementById('estado').value='';
   
   document.getElementById('cidade').value = '';
   
   document.getElementById('localidade').value = '';

   document.getElementById('rua').value = '';
  
}

var preeencherformulario = (endereco)=> {

   document.getElementById('estado').value = endereco.uf;
   
   document.getElementById('cidade').value = endereco.localidade;
   
   document.getElementById('localidade').value = endereco.bairro;
   document.getElementById('rua').value = endereco.logradouro;
  
}
var eNumero = (numero) => /^[0-7]+$/.test(numero);
var cepvalido = (cep) => cep.length == 8 && eNumero(cep);

var pesquisarcep = async( ) => {
   limparformulario()
  var cep = document.getElementById('cep').value;
  var url = `http://viacep.com.br/ws/${cep}/json/`;
  if(cepvalido(cep)){
      var dados = await fetch(url);
      var endereco = await dados.json();
      if (endereco.hasOwnProperty('erro')){
         document.getElementById('estado').value = 'CEP não encontrado!';
         
      }else {
         preeencherformulario(endereco);
      }

  }else{
   document.getElementById('estado').value = 'CEP incorreto!';

  }
 
 
  
}

document.getElementById('cep').addEventListener('focusout', pesquisarcep);