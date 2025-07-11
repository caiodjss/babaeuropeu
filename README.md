
# Site Baba Europeu

Bem-vindo ao **Site Baba Europeu**! Este projeto foi desenvolvido para gerenciar eventos de futebol, com funcionalidades de login e registro de convidados, proporcionando uma experiência prática para organizadores e participantes.

## 📦 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para desenvolvimento de APIs RESTful.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **MySQL**: Banco de dados relacional para armazenar as informações.
- **Cors**: Middleware para permitir requisições de origens externas (CORS).
- **bcryptjs**: Para a segurança de senhas (hashing).

## 🚀 Funcionalidades

- **Cadastro de usuários**: Sistema de login e registro de novos usuários.
- **Gestão de eventos de futebol**: Criação, visualização e gerenciamento de eventos.
- **Registro de convidados**: Permite que organizadores registrem convidados para os eventos de futebol.
- **API RESTful**: As funcionalidades estão expostas através de rotas RESTful, acessíveis via API.

## 🔧 Como Rodar o Projeto

### 1. Clonar o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/site-baba-europeu.git
```

### 2. Instalar dependências

Acesse a pasta do projeto e instale as dependências necessárias:

```bash
cd site-baba-europeu
npm install
```

### 3. Configurar o Banco de Dados

Certifique-se de que o MySQL esteja configurado e rodando em sua máquina. Crie o banco de dados que o sistema irá utilizar. Exemplo de como criar o banco de dados:

```sql
CREATE DATABASE site_baba_europeu;
```

Configure as credenciais de acesso ao banco de dados no arquivo de configuração do projeto.

### 4. Rodar o servidor

Com as dependências instaladas e o banco de dados configurado, você pode rodar o servidor com o comando:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 📄 Endpoints

### POST /api/usuarios

Criação de um novo usuário.

### GET /api/usuarios

Retorna a lista de todos os usuários.

### POST /api/eventos

Criação de um novo evento de futebol.

### GET /api/eventos

Retorna a lista de eventos.

### POST /api/convidados

Registro de um novo convidado para um evento.
