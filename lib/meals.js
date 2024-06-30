import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  // throw new Error('Loading meals failed!')
  return db.prepare('SELECT * from meals').all() // all for getting, run for setting
}

export function getMeal(slug) {
  return db.prepare('SELECT * from meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xcc(meal.instructions)
  meal.ingredients = xcc(meal.ingredients)
  meal.extra = xcc(meal.extra)
  meal.amnt_of_persons = xcc(meal.amnt_of_persons)
  meal.search_strings = xcc(meal.search_strings)
}
