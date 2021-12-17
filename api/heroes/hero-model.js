const db = require("../../data/db-config")

async function getAllHeroes() {
  const allHeroes = await db("heroes")
  return allHeroes
}

async function getById(id) {
  const hero = await db("heroes")
    .where({ hero_id: id })
    .first()
  return hero
}

module.exports = {
  getAllHeroes,
  getById,
}
