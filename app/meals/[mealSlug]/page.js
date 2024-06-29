import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getMeal } from '@/lib/meals'

import classes from './page.module.css'

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound()
  }

  meal.ingradients = meal.ingradients.replace(/\n/g, '<br />')
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  meal.extra = meal.extra.replace(/\n/g, '<br />')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.HeaderText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
          <p className={classes.amntOfPersons}>Aantal personen: {meal.amnt_of_persons}</p>
        </div>
      </header>
      <main>
        <p className={classes.headings}>Ingrediënten:</p>
        <p className={classes.text} dangerouslySetInnerHTML={{ __html: meal.ingradients }}></p>
        <p className={classes.headings}>Werkwijze:</p>
        <p className={classes.text} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        <p className={classes.headings}>Extra:</p>
        <p className={classes.text} dangerouslySetInnerHTML={{ __html: meal.extra }}></p>
      </main>
    </>
  )
}
