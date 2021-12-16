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
      expect(result).toHaveLength(3)
    })
  })
})
