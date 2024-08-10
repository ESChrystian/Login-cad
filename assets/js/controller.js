// VALIDAR ACESSO EM TELA DE LOGIN
function acessar() { // CRIA UMA FUNÇÃO  QUE VALIDA O QUE FOI ESCRITO NOS CAMPOS DE LOGIN
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;


    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos"); // Mostra Pop-up caso usuário não preencha corretamente os campos de Login.
    } else {
        // Após a validação do login, os formulários se movem...
        // Formulário de Login
        let login = document.getElementById("formLogin"); 
        // Formulário de cadastro
        let cadastro = document.getElementById("formCad"); 
        login.style.top = "-500px"; //1° etapa: formulário de Login sai da tela
        cadastro.style.left = "0" //2° etapa: formulário de cadastro se move ao centro da tela

    }
}




var dadosLista = []; //Array
var alert = document.getElementById("alert"); // Mensagem de Span, variavel utilizada nas funcões salvarUser e editar
var h6 = document.getElementById("text");
// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value; // Pega valor do input digitado pelo usuário

    if (nomeUser) { //Se existe valor digitado pelo user

        dadosLista.push(nomeUser); // Adiciona valor ao array
        criaLista(); // Inicia a funcão cria lista
        document.getElementById("nomeUser").value = ""; // Após envio do campo de Login, o input fica vazio
        alert.innerHTML = ""; //Div onde fica mensagem de aviso fica vazia
        h6.style.display = "none";


    } else {
        // alert("Favor informar o nome para cadastro"); // Caso o usuário não preencha o campo ele aparecera um Pop-up para preenchimento completo do cadastro.
        alert.style.color = "red";
        alert.innerHTML = "Preencha o formulário de cadastro";



    }

}

// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS

// <td> = criar a coluna | <tr> = criar a linha |<th> = cabeçalho da tabela| += = oque estiver dentro da tabela fica, mais adiciona mais algum item há tabela.

function criaLista() {
    let tabelaDesign = document.getElementById("tabela"); //Variável para personalização da tabela
    // Estrutura da tabela que receberá dados dos usuários
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>"; 
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabelaDesign.style.backgroundColor = "#ffff";
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;

    }

}

// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i) {
    document.getElementsByClassName('right')
    document.getElementById("nomeUser").value = dadosLista[(i - 1)]; dadosLista.splice(dadosLista[(i - 1)], 1);
    alert.innerHTML = "";

}

// FUNÇÃO QUE EXCLUI NOME DA LISTA
function excluir(i) { 
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

//deleteRow = deletar linha