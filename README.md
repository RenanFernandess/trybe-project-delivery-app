<a name="readme-top"></a>
# :construction: README customizado em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

<details>
  <summary><strong></strong></summary><br />

</details>
-->

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#o-aplicativo-contém">O aplicativo contém</a></li>
        <li><a href="#construido-com">Construido Com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#configurando">Configurando</a></li>
        <li><a href="#executando">Executando</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

## Sobre o Projeto
Nesse projeto, Meu grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍹

> O projeto não foi só codar, mas também é trabalhar em equipe, aprender e se divertir muito!

### O aplicativo contém:

**Acesso via login:** <br>
Tanto `clientes` como pessoas `vendedoras`, assim como `admin`, que administra o sistema, tem acesso ao aplicativo via login, porém para funções diferentes:

   * A pessoa `cliente`, que compra da lista de produtos;
   * A pessoa `vendedora`, que aprova, prepara e entrega;
   * A pessoa `administradora`, que gerencia quem usa o aplicativo;

**Faz a comunicação entre clientes e pessoas vendedoras:** <br>
A pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem o comprou, essa pessoa marca o pedido como "recebido". Ambos possuem detalhes sobre seus pedidos;

Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, pode ver as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;



<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Construido Com

  #### Front-end
  * [<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  * ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  * [<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />](https://www.w3schools.com/css/)
  * ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  * ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
  * ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
  
  #### Back-end
  * [<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  * ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
  * ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
  * ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  * ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
  * ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
 
 
 
<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Começando

### Instalação

  1. Clonar o repositorio

    git clone git@github.com:RenanFernandess/trybe-project-delivery-app.git

  2. Entrar na pasta project-pixels-art-2.0
  
    cd ./trybe-project-delivery-app
    
  3. Instalar pacotes NPM
  
    npm install

### Configurando

   1. Entrar na pasta do back-end
    
    cd back-end

#### Docker
O Docker está sendo utilizado para criar um container para o banco de dados MySQL.

  1. Iniciar o Docker Compose

    docker-compose up -d
    
#### Ambiente
  1. Criar arquivo .env

    touch .env
    
  2. Configurar as variáveis

    NODE_ENV=development
    API_PORT=3001
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=password
    MYSQL_DB_NAME=delivery-app
    EVAL_ALWAYS_RESTORE_DEV_DB=true


### Executando
  
  1. iniciar o aplicativo
    
    npm start

   após o start por padrão você será redirecionado para uma página do seu navegador com a seguinte URL:
   
    http://127.0.0.1:3000/

  
 
<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
 
## Uso

### Front-end

#### Customer

#### Seller

#### Admin

### Back-end

### Scripts

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

* Fabiana Moraes - [Linkedin](https://www.linkedin.com/in/fabiana-mrs/) - [GitHub](https://github.com/Fabianamrs)
* Gabriel Raeder - [Linkedin](https://www.linkedin.com/in/gabrielraedergoncalves/) - [GitHub](https://github.com/gabrielraeder)
* Renan Fernandes - [Linkedin](https://www.linkedin.com/in/orenanfernandes/) - [GitHub](https://github.com/RenanFernandess) - renzinestuods@gmail.com
* Rubens Deola - [Linkedin](https://www.linkedin.com/in/rubens-deola/) - [GitHub](https://github.com/RDeola)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Agradecimentos

* [Trybe](https://www.betrybe.com/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
