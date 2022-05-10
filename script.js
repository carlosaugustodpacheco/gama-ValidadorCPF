console.log('Javascript carregado')

function validaCPF(cpf) {

}
function validacao () {
    console.log('Iniciando validação CPF');
   var cpf = document.getElementById('cpf_digitado').value
   console.log(cpf);

   var resultadoValidadacao = validaCPF(cpf);

   if (resultadoValidadacao) {
       document.getElementById('success').style.display = 'block';
   } else {
    document.getElementById('error').style.display = 'block';
}
   }