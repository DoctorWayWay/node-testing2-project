const request = require('supertest')
const server = require('../server')
const db = require('../../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe("Database enviroment", () => {
  it("is in the correct env", () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe("Hero Router", () => {
  describe("[GET] /api/heroes", () => {
    let res
    beforeEach(async () => {
      res = await request(server).get('/api/heroes')
    })
    it("responds with an array of all the heroes", () => {
      expect(res.body).toHaveLength(3)
    })
  })
})
