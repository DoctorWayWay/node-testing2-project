const db = require("../../data/db-config")
const Hero = require("./hero-model")

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy() // disconnects from db
})

describe("Hero model", () => {
  describe("getAllHeroes", () => {
    let result
    beforeEach(async () => {
      result = await Hero.getAllHeroes()
    })
    it("returns an array of all the heroes", async () => {
      const expected = 3 // the amount of heroes in the DB
      expect(result).toHaveLength(expected)
    })
  })
  describe("getById", () => {
    let result
    beforeEach(async () => {
      result = await Hero.getById(1)
    })
    it("returns an object containing a hero_id, name, hero_name, and description of the hero", async () => {
      expect(result).toHaveProperty("hero_id")
      expect(result).toHaveProperty("name")
      expect(result).toHaveProperty("hero_name")
      expect(result).toHaveProperty("description")
    })
    it("returns an object with the correct hero_id", () => {
      expect(result.hero_id).toBe(1)
    })
  })
})
