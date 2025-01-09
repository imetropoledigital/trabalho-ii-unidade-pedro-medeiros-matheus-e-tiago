# API Dinâmica com Node.js e MongoDB

---

## Descrição

Este consiste em uma API dinâmica desenvolvida em Node.js com integração com o MongoDB. A API permite a criação, leitura, atualização e exclusão (CRUD) de entidades/coleções de forma dinâmica. Além disso, é possível realizar consultas avançadas com projeções e filtros personalizados.

O projeto utiliza Docker Compose para facilitar o gerenciamento do MongoDB em contêiner.

---

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Docker

---

## Instalação e Execução

### Requisitos

1. Docker e Docker Compose instalados na máquina.
2. Node.js e npm instalados.

### Passos para Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/imetropoledigital/trabalho-ii-unidade-pedro-medeiros-matheus-e-tiago.git
   cd trabalho-ii-unidade-pedro-medeiros-matheus-e-tiago
   ```

2. Inicialize o MongoDB com Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie a API:

   ```bash
   npm start
   ```

   A API estará acessível em `http://localhost:3000`.

---

## Endpoints da API

### 1. Verificar Saúde da API

**GET** `http://localhost:3000/health`

Retorna o status da API.

### 2. Criar Entidade/Dados

**POST** `http://localhost:3000/<colecao_nome>`

Exemplo de requisição para criação de alunos:

```bash
POST http://localhost:3000/students
Content-Type: application/json

{
  "name": "João",
  "email": "joao@example.com",
  "age": 30
}
```

### 3. Ler Todos os Dados

**GET** `http://localhost:3000/<colecao_nome>`

Exemplo:

```bash
GET http://localhost:3000/students
```

### 4. Ler Dados por ID

**GET** `http://localhost:3000/<colecao_nome>/:id`

Exemplo:

```bash
GET http://localhost:3000/students/6778b326ea6f85ef46b76d5f
```

### 5. Atualizar Dados

**PUT** `http://localhost:3000/<colecao_nome>/:id`

Exemplo:

```bash
PUT http://localhost:3000/students/6778b326ea6f85ef46b76d5f
Content-Type: application/json

{
  "email": "joão@gmail.com",
  "age": 24
}
```

### 5. Paginação de Dados

**GET** `http://localhost:3000/students?limit=<>&page=<>`

Onde:

- `limit`: Número de resultados por página.
- `page`: Número da página que deseja consultar.

Exemplo (Página 3 com 2 registros por página):

```bash
GET http://localhost:3000/students?limit=2&page=3

[
  {
    "_id": "64b8e3b6a2c5f3b67c9b1234",
    "name": "Carlos",
    "age": 22,
    "email": "carlos@example.com"
  },
  {
    "_id": "64b8e3b6a2c5f3b67c9b5678",
    "name": "Ana",
    "age": 29,
    "email": "ana@example.com"
  }
]
```

### 6. Consulta com Projeção

É possível incluir ou excluir campos na resposta utilizando o parâmetro fields.

#### Exemplos

- Inclusão de campos

  **GET** `http://localhost:3000/students?fields=name,age`

  ```bash
  [
   {
      "_id": "64b8e3b6a2c5f3b67c9b1234",
      "name": "Carlos",
      "age": 22
   },
   {
      "_id": "64b8e3b6a2c5f3b67c9b5678",
      "name": "Ana",
      "age": 29
   }
  ]
  ```

- Exclusão de campos: Para excluir um campo, adicione um sinal de menos (-) antes do nome do campo.

  **GET** `http://localhost:3000/students?fields=-name`

  ```bash
  [
   {
      "_id": "64b8e3b6a2c5f3b67c9b1234",
      "email": "carlos@example.com",
      "age": 22
   },
   {
      "_id": "64b8e3b6a2c5f3b67c9b5678",
      "email": "ana@example.com"
      "age": 29
   }
  ]
  ```

### 7. Aplicação de Filtros

Como mencionado, a API suporta a aplicação de filtros dinâmicos nas coleções, seguindo o padrão do MongoDB. Os usuários podem utilizar operadores de comparação (`$gt`, `$lt`, `$eq`, `$gte`, `$lte`, `$ne`, etc.) e lógicos (`$and`, `$or`, `$not`, `$nor`, etc.). Consulte a [documentação oficial do MongoDB](https://www.mongodb.com/docs/manual/reference/operator/query/) para mais detalhes.

Para aplicar filtros, utilize o parâmetro `query` e passe o objeto que representa o filtro desejado.

- **Exemplo**

  ```bash
  GET http://localhost:3000/students?query={age:{gte:25}}
  ```

- **Resultado**
  ```bash
  [
   {
      "_id": "64b8e3b6a2c5f3b67c9b5678",
      "name": "Ana",
      "age": 29,
      "email": "ana@example.com"
   }
  ]
  ```

## Contribuidores

- PEDRO LUCAS FARIAS FIGUEIREDO DE MEDEIROS
- TIAGO RODRIGUES DOS SANTOS
- MATHEUS QUEIROZ DE ALMEIDA PEREIRA
