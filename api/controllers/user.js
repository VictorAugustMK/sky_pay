const db = require("../db/conn.js");

const getUsers = (req, res) => {
  const q = "SELECT * FROM skyart.usuarios";

  db.query(q, { logging: console.log }, (err, data) => {
    if (err) {
      console.error("Erro ao consultar usuários:", err);
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado" });
    }
    console.log("Usuários encontrados:", data);
    return res.status(200).json(data);
  });
};



module.exports = { getUsers };
