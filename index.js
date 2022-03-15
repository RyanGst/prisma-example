const express = require("express");
const prisma = require("@prisma/client");
const app = express();
const { v4 } = require("uuid");
const db = new prisma.PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contato", async (req, res) => {
  const { nome, telefone, email, newsletter, mensagem } = req.body;
  
  try {
    const newContact = await db.user.create({
      data: {
        name: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        newsletter: Boolean(newsletter),
        id: v4(),
      },
    });

    if (newContact) {
      res.json({ message: "contato criado com sucesso" });
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen("3030", () => {
  console.log("App is running on port 3030");
});
