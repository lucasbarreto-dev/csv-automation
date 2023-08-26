# csv-automation

## Getting started 

### 1 - Clone o repositório

```sh
git clone <link-do-repositório>
```

### 2 - Instale as dependências do projeto

```sh
npm install
```
### 3 - Crie os diretórios <strong>tm</strong> e <strong>dm</strong>. 
  - Dentro de cada um, crie um diretório chamado <strong>csv</strong>

  <p>
    A estrutura de pastas e arquivos necessária ao funcionamento do projeto imediatamente após a clonagem do repositório e exportação dos csv's de cada turma, deve estar conforme a imagem abaixo:
  </p>

![Estrutura de pastas e arquivos](https://github.com/lucasbarreto-dev/csv-automation/blob/main/public/%C3%81rvore%20-%20pastas%20e%20arquivos.png?raw=true)

### 4 - Execute o script

```sh
node .
```

<p>O comando acima deve ser executado na raíz do projeto, executando o arquivo <strong>index.js</strong></p>.

```js
// ./index.js

const path = require('path');
const { auto } = require('./utils/auto');

const TM = path.resolve(__dirname, './tm/csv');
const DM = path.resolve(__dirname, './dm/csv');

const directories = [ DM, TM ];

directories.forEach((directory) => auto(directory));
```

<p>Ao ser executado, o arquivo irá gerar na raíz do projeto 2 arquivos para cada arquivo nos diretórios tm/csv e dm/csv.</p>


### 5 - Apagar os arquivos gerados por automação:

  - #### 5.1 - Apagar todos os arquivos:
    ```sh
    // em node

    npm run clean
    ```

      ou

    ```sh
    // em shell

    ./remove.sh
    ```

  - #### 5.2 - Apagar apenas os arquivos com nome e e-mail

    ```sh
    // em node

    npm run rmEmail
    ```
      ou

    ```sh
    // em shell

    ./removeEmail.sh
    ```

  - #### 5.3 - Apagar apenas os arquivos com nome e phone

    ```sh
    // em node

    npm run rmPhone
    ```
      ou

    ```sh
    // em shell

    ./removePhone.sh
    ```
