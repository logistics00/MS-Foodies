import Link from 'next/link'

import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'

export default async function MealsPage() {
  const meals = await getMeals()
  return (
    <>
      <header className={classes.header}>
        <h1>
          Heerlijke maaltijden, <span className={classes.highlight}>door jullie</span> gecreëerd
        </h1>
        <p>Kies je favoriete recept en kook het zelf. Het is gemakkelijk!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Deel je favoriete recept.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}
