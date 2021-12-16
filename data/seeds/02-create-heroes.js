const heroes = [
  {
    name: "John Garner",
    hero_name: "Max Effort John",
    description: "A man with an unbreakable will. He has fast reflexs and a strong swinging arm."
  },
  {
    name: "Casey Kains",
    hero_name: "Lady Lightning",
    description: "Not much is known about her, other than that she is ranked as one of the strongest amoung the heroes"
  },
  {
    name: "Steven Johnson",
    hero_name: "The Stone Golem",
    description: "A powerful geomancer who, when in combat, is far too dangerous to be near"
  },
]

exports.seed = async function (knex) {
  await knex("heroes").insert(heroes)
}
