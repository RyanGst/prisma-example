# Exemplo Prisma 🏳️‍🌈⃤

Esse repositório contém um simples exemplo de como usar o prisma para fazer acesso ao banco de dados.

Recomendo esses materiais:

- [Como construir uma API REST com Prisma e PostgreSQL](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql-pt)
- [Documentação Oficial Prisma](https://www.prisma.io/docs/)
- [Vídeo da RocketSeat sobre Prisma](https://www.youtube.com/watch?v=oWKuJnrceS8)

## Como rodar o projeto

Copie o `.env.example` e renomeie para `.env`

```bash
cp .env.example .env
```

Configure a string de conexão do banco com as suas credenciais:

```text
DATABASE_URL="postgresql://usuario:senha@localhost:5432/banco?schema=public"
```

Instale as dependências com yarn:

```bash
yarn
```

ou use o NPM:

```bash
npm install
```

Inicie o servidor com:

```bash
yarn dev

# Equivalente a npm run dev
```
