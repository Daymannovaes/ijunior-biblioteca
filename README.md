# [Biblioteca IJunior](http://ijunior.dayman.me)
Cadastro de livros e pessoa para a biblioteca do IJunior

### Breve descrição
A aplicação funciona apenas para cadastro de livros e pessoas, mostrando quantos cadastros já foram feitos. Porém, não é possível pesquisar o que já foi cadastrado.

Algumas validações são feitas, como por exemplo: email repetido, campos required vazios, entre outros.

Para funcionamento local, é necessário `mongoDB` e `nodejs`



### Estrutura da aplicação
    
    /assets                     - arquivos frontend
        |~bootstrap/            - arquivos bootstrap (js e css)
        |~css/                  - arquivos css
        |~js/                   - arquivos js
        | |+index.js            - script principal
        | |+request.js          - abstração do objeto xmlhttprequest
    /server
        |~controller/           - manipulação de requisição e construção de resposta
        | |+book.js             - Controllers crud da rota /book
        | |+person.js           - Controllers crud da rota /person
        | |+index.js            - Inclui e expõe todos os controllers
        |~model/                - arquivos de modelo (mongoDB)
        | |+book.js             - Modelo de livro (mongoose)
        | |+person.js           - Modelo de pessoa (mongoose)
        |+index.js              - Inicializa todos os módulos (exrpess, mongoose, route e server)
        |+route.js              - Define todas as rotas e os respectivos controllers
        |+server.js             - Cria o servidor na porta 80



#### Exemplo em funcionamento
![Demo Screenshot](http://i.imgur.com/Fs9Idk2.png)
