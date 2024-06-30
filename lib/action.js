'use server'

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    amnt_of_persons: formData.get('amntOfPersons'),
    search_strings: formData.get('searchStrings'),
    extra: formData.get('extra'),
  }
  console.log(meal)
}
