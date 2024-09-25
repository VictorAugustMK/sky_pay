const db = require("../db/conn.js");

const getUsers = async (_req, res) => {
  const q = 'SELECT * FROM skyart.usuarios';
  
  try {
    const result = await db.query(q);
    const data = result[0];

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado" });
    }

    // console.log("Usuários encontrados:", data);clcl
    return res.status(200).json(data);

  } catch (err) {
    console.error("Erro ao consultar usuários:", err);
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};


module.exports = { getUsers, addUser };
