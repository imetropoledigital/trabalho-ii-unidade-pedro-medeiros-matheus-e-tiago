### API Dinâmica com Node.js e MongoDB

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

## Contribuidores

- PEDRO LUCAS FARIAS FIGUEIREDO DE MEDEIROS
- TIAGO RODRIGUES DOS SANTOS
- MATHEUS QUEIROZ DE ALMEIDA PEREIRA
