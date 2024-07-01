# csv-automation

## Sumário
  - [1 - Clonando o repositório](#1---clone-o-repositório)
  - [2 - Instale as dependências do projeto](#2---instale-as-dependências-do-projeto)
  - [3 - Crie os diretórios tm, dm, ht e hd](#3---crie-os-diretórios-tm-dm-ht-e-hd)
  - [4 - Execute o comando](#4---execute-o-comando)
  - [5 - Conferindo os arquivos na pasta](#)
  - [6 (Opcional)- Como apagar os arquvios gerados pela automação](#6---apagar-os-arquivos-gerados-por-automação) 
    - [6.1 - Como apagar todos os arquivos](#61---apagar-todos-os-arquivos)
    - [6.2 - Como apagar somente os arquivos com nome e email](#62---apagar-apenas-os-arquivos-com-nome-e-e-mail) 
    - [6.3 - Como apagar somente os arquivos com nome e telefone](#63---apagar-apenas-os-arquivos-com-nome-e-telefone)

<hr>

<h3>
  <strong>ATENÇÃO!</strong>
</h3>

- <h3>Para usar esse projeto é necessário:
    <ul> 
      <li>Ter uma conta no GitHub</li> 
      <li>Noções de bash (terminal linux ou Mac)</li>
      <li>Node.js instalado</li>
    </ul>
  </h3>

- <h3>Todos os comandos devem ser executados na raíz do projeto</h3>
<hr>

<br />
<br />

# Getting started 

### 1 - Clone o repositório
<p>Pelo terminal, navegue até o diretório onde você quer guardar o repositório localmente e use o comando abaixo.</p>

```sh
git clone <link-do-repositório>
```
<br />
<br />

### 2 - Instale as dependências do projeto

```sh
npm install
```
<br />
<br />

### 3 - Crie os diretórios <strong>tm</strong>, <strong>dm</strong>, <strong>ht</strong> e <strong>hd</strong>.

  <p>Na raíz do projeto, execute o comando:</p>

```sh
  npm run create
```
  <!-- - Dentro de cada um, crie um diretório chamado <strong>csv</strong> -->

  <p>
    A estrutura de pastas e arquivos necessária ao funcionamento do projeto imediatamente após a clonagem do repositório e exportação dos csv's de cada turma, deve estar conforme a imagem abaixo:
  </p>

![Estrutura de pastas e arquivos](https://github.com/lucasbarreto-dev/csv-automation/blob/main/public/%C3%81rvore%20-%20pastas%20e%20arquivos.png?raw=true)

<br />
<br />

### 4 - Execute o comando

```sh
node .
```

<!--- 
```js
// ./index.js

const path = require('path');
const { auto } = require('./utils/auto');

const TM = path.resolve(__dirname, './tm/csv');
const DM = path.resolve(__dirname, './dm/csv');

const directories = [ DM, TM ];

directories.forEach((directory) => auto(directory));
```
--->

<p>Ao ser executado, o arquivo irá gerar <strong> na raíz do projeto </strong> 2 arquivos para cada arquivo nos diretórios tm/csv e dm/csv.</p>

<br />
<br />

### 5 - Conferindo os arquivos na pasta

Ao execução do comando abaixo abrirá a pasta permitindo uma interação mais visual (<strong>user friendly</strong>).

```sh
open $(pwd)
```

<br />
<br />


### 6 - Apagar os arquivos gerados por automação:

  - #### 6.1 - Apagar todos os arquivos:
    ```sh
    // em node

    npm run clean
    ```

      ou

    ```sh
    // em shell

    ./remove.sh
    ```

  - #### 6.2 - Apagar apenas os arquivos com nome e e-mail

    ```sh
    // em node

    npm run rmEmail
    ```
      ou

    ```sh
    // em shell

    ./removeEmail.sh
    ```

  - #### 6.3 - Apagar apenas os arquivos com nome e telefone

    ```sh
    // em node

    npm run rmPhone
    ```
      ou

    ```sh
    // em shell

    ./removePhone.sh
    ```
