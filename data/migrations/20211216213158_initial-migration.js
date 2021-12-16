
exports.up = async function (knex) {
  await knex.schema
    .createTable("heroes", table => {
      table.increments("hero_id")
      table.string("name")
      table.string("hero_name")
        .notNullable()
        .unique()
      table.string("abilities")
        .notNullable()
    })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("heroes")
};
