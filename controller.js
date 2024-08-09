// VALIDAR ACESSO EM TELA DE LOGIN
 
function acessar(){ // CRIA UMA FUNÇÃO  QUE VALIDA OQUE FOI ESCRITO NOS CAMPOS DE LOGIN
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos"); // Mostra Pop-up caso usuário não preencha corretamente os campos de Login.
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = "cadastro.html" ;
    }
}
 
//FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value; // Declara variáveis limitando seu escopo no bloco
 
    if(nomeUser){
 
        dadosLista.push(nomeUser); // Adicionou um ou mais elementos ao final do array e retornou o novo comprimento desse array.
        //console.log(dadosLista);
        criaLista();
        document.getElementById("nomeUser").value = ""; // Após envio do campo de Login, o input fica vazio
 
 
    }else{
        alert("Favor informar o nome para cadastro"); // Caso o usuário não preencha o campo ele aparecera um Pop-up para preenchimento completo do cadastro.
    }
}
 
// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS
 
// <td> = criar a coluna | <tr> = criar a linha |<th> = cabeçalho da tabela| += = oque estiver dentro da tabela fica, mais adiciona mais algum item há tabela.
 
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0; i<= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
 
}
 
// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];dadosLista.splice(dadosLista[(i - 1)], 1);
}
 
// FUNÇÃO QUE EXCLUI NOME DA LISTA
function excluir(i){ // CRIOU UMA FUNÇÃO EXCLUIR
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}
 
//deleteRow = deletar linha