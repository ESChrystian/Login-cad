// FUNCAO PARA VALIDACÃO DE ACESSO

function acessar() {
    let loginEmail = document.getElementById(  'loginEmail').value;
    let loginSenha = document.getElementById(  'loginSenha').value;
    
    if(!loginEmail || !loginSenha) {
        alert("Ta errado jumento.");
    }else{
        alert("Preencheu os campo certo lenda");
    }

}