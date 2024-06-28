import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  // throw new Error('Loading meals failed!')
  return db.prepare('SELECT * from meals').all() // all for getting, run for setting
}

export function getMeal(slug) {
  return db.prepare('SELECT * from meals WHERE slug = ?').get(slug)
}
