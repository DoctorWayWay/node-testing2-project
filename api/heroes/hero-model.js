const db = require("../../data/db-config")

async function getAllHeroes() {
  const allHeroes = await db("heroes")
  return allHeroes
}

module.exports = {
  getAllHeroes
}
