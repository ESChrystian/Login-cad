<h1 align=center>Projeto de Login e Cadastro de Usuários</h1>

>Este projeto é um exemplo simples de um sistema de login e cadastro de usuários, desenvolvido utilizando HTML, CSS e JavaScript com a ajuda do Bootstrap e Box Icons. O objetivo é fornecer um formulário de login básico e um formulário de cadastro com funcionalidades de visualização, edição e exclusão de registros.


## Estrutura do Projeto

1. Arquivos e Pastas
index.html: Página principal que contém o layout dos formulários de login e cadastro.
css/style.css: Folha de estilo para personalização visual dos formulários e tabelas.
js/controller.js: Arquivo JavaScript responsável pela lógica de validação de login, cadastro de usuários e manipulação de dados.
2. Descrição dos Componentes
HTML

* Formulário de Login: Permite ao usuário inserir email e senha para acessar a área de cadastro.
* Formulário de Cadastro: Permite ao usuário se cadastrar inserindo nome e email. Os dados cadastrados são exibidos em uma tabela.

CSS

* Estiliza o layout dos formulários e da tabela, além de definir a aparência geral da página, como cores e posicionamento dos elementos.

JavaScript

* Função acessar(): Valida o email e a senha do formulário de login. Se os dados estiverem corretos, o formulário de login se move para fora da tela e o formulário de cadastro aparece.
* Função salvarUser(): Adiciona os dados do usuário (nome e email) ao array e atualiza a tabela.
* Função criaLista(): Cria e atualiza a tabela com os dados dos usuários cadastrados.
* Função editar(i): Permite editar um usuário selecionado na tabela.
* Função excluir(i): Remove um usuário da tabela e dos arrays.

Como Usar
Clone o Repositório: Faça o clone do repositório em sua máquina local usando git clone 

````https://github.com/ESChrystian/Login-cadastro.git```` 

Instale Dependências: Certifique-se de que você tem uma conexão com a internet, pois os estilos e ícones são carregados a partir de CDNs.

Abra o Arquivo HTML: Abra o arquivo index.html em um navegador para visualizar o projeto em ação.

## Funcionalidades
Login: Valida o email e a senha. Se a validação for bem-sucedida, o formulário de cadastro é exibido.

Cadastro: Permite a inserção de nome e email. Os dados são exibidos em uma tabela e podem ser editados ou excluídos.

Visualização: Mostra todos os usuários cadastrados em uma tabela.

Personalização
Estilos: Modifique o arquivo css/style.css para alterar o layout e a aparência do projeto.

Lógica: Ajuste o arquivo js/controller.js para alterar o comportamento das funções ou adicionar novas funcionalidades.

## Autor: 
[Chrystian de Ameida Silva](https://github.com/ESChrystian/Login-cadastro/)
