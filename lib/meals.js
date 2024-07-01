import fs from 'node:fs'

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
  meal.ingredients = xss(meal.ingredients)
  meal.extra = xss(meal.extra)
  meal.search_strings = xss(meal.search_strings)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}` // maybe add an unique part to each filename

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()

  // Now write the image
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving of the image failed!')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(
    `
    INSERT INTO meals
      (title, slug, image, summary, amnt_of_persons, search_strings, ingradients, instructions, extra, creator, creator_email)
    VALUES (
      @title,
      @slug,
      @image,
      @summary,
      @amnt_of_persons,
      @search_strings,
      @ingradients,
      @instructions,
      @extra,
      @creator,
      @creator_email
    )
    `
  ).run(meal)
}
