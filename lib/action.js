'use server'

import { redirect } from 'next/navigation'

import { saveMeal } from './meals'

export async function shareMeal(formData) {
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
  await saveMeal(meal)
  redirect('/meals')
}
