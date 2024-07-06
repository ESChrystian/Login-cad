// FUNCAO PARA VALIDACÃO DE ACESSO

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Ta errado jumento.");
    } else {
        window.location.href = "cadastro.html";
    }

}

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY

var dadosLista = [];
// ESCUTADOR ADICIONADO
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nomeUser = document.getElementById('nomeUsuario').value;
    if (nomeUser) {
        dadosLista.push(nomeUser);

        document.getElementById("users").innerHTML =
        dadosLista.map(usernames => 
            `<tr>
            <td>${usernames}</td>
            <td>Inserido</td>
            </tr>`
        ).join("");

    } else {
        console.log("Favor informe nome para cadastro!");
    }
}
);





