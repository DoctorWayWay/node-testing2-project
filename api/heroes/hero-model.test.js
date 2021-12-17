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
  describe("addHero", () => {
    let result
    beforeEach(async () => {
      result = await Hero.addHero({ hero_name: "Iron Foot", })
    })
    it("adds a new hero to the database", async () => {
      const allHeroes = await db("heroes")
      expect(allHeroes).toHaveLength(4)
    })
    it("returns the newly added hero", async () => {
      expect(result).toMatchObject({
        hero_id: 4,
        hero_name: "Iron Foot"
      })
    })
  })
  describe("changeHero", () => {
    let result
    const id = 2
    beforeEach(async () => {
      result = await Hero.changeHero(id, {
        name: "",
        hero_name: "Boom Fist",
        description: "Blows his enemies up with his punches"
      })
    })
    it("changes the selected by id hero", () => {
      expect(result).toMatchObject({
        hero_id: id,
        name: "",
        hero_name: "Boom Fist",
        description: "Blows his enemies up with his punches"
      })
    })
    it("changes the selected by id hero", () => {
      expect(result).toMatchObject({
        hero_id: id,
        name: "",
        hero_name: "Boom Fist",
        description: "Blows his enemies up with his punches"
      })
    })
    it("cannot update heroes who aren't in the database", async () => {
      expect(
        await Hero.changeHero(7, { hero_name: "Caped Baldy" })).toMatchObject({ message: "hero does not exist" })
    })
  })
})
