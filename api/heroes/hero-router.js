const router = require("express").Router()
const Hero = require("./hero-model")

router.get("/", async (req, res, next) => {
  try {
    const allHeroes = await Hero.getAllHeroes()
    res.status(200).json(allHeroes)
  } catch (err) {
    next({
      message: "Could not retrieve heroes"
    })
  }
})

module.exports = router
