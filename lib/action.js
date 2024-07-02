'use server'

import { redirect } from 'next/navigation'

import { saveMeal } from './meals'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    image: formData.get('image'),
    amnt_of_persons: formData.get('amntOfPersons'),
    search_strings: formData.get('searchStrings'),
    ingradients: formData.get('ingradients'),
    instructions: formData.get('instructions'),
    extra: formData.get('extra'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.amnt_of_persons) ||
    isInvalidText(meal.search_strings) ||
    isInvalidText(meal.ingradients) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: 'Invalid input.' }
  }
  await saveMeal(meal)
  redirect('/meals')
}
