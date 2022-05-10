console.log('Javascript carregado')

function validaCPF(cpf) {
    //  console.log( "o cpf tem a quantidade de" + cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring (9)
        // console.log("numero do cpf" + numeros)
        // console.log("digitos do cpf" + digitos)

        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        return true;
    }

}
function validacao () {
    console.log('Iniciando validação CPF');

   var cpf = document.getElementById('cpf_digitado').value

   var resultadoValidadacao = validaCPF(cpf);

   if (resultadoValidadacao) {
       document.getElementById('success').style.display = 'block';
   } else {
    document.getElementById('error').style.display = 'block';
}
   }