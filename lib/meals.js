import sql from 'better-sqlite3'

const db = sql('meals.db')

export function getMeals() {
  return db.prepare('SELECT * from meals').all() // all for getting, run for setting
}
