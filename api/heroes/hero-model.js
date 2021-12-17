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

async function addHero(hero) {
  const [newHeroID] = await db("heroes")
    .insert(hero)
  const newHero = await getById(newHeroID)
  return newHero
}

async function changeHero(id, update) {
  await db("heroes")
    .where({ hero_id: id })
    .update({
      ...update
    })
  const updatedHero = await getById(id)
  if (updatedHero === undefined) {
    return {
      message: "hero does not exist"
    }
  }
  return updatedHero
}

module.exports = {
  getAllHeroes,
  getById,
  addHero,
  changeHero,
}
