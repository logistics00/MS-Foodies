import ImagePicker from '@/components/meals/image-picker'
import MealsFormStatus from '@/components/meals/meals-form-submit'
import classes from './page.module.css'
import { shareMeal } from '@/lib/action'

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='amntOfPersons'>Amount of persons</label>
            <input type='text' id='amntOfPersons' name='amntOfPersons' required />
          </p>
          <p>
            <label htmlFor='searchStrings'>Search strings</label>
            <textarea id='searchStrings' name='searchStrings' rows='3' required />
          </p>
          <p>
            <label htmlFor='ingradients'>Ingradients</label>
            <textarea id='ingradients' name='ingradients' rows='10' required></textarea>
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea id='instructions' name='instructions' rows='10' required></textarea>
          </p>
          <p>
            <label htmlFor='extra'>Extra</label>
            <textarea id='extra' name='extra' rows='10' required></textarea>
          </p>
          <ImagePicker label='Your image' name='image' />
          <p className={classes.actions}>
            <MealsFormStatus />
          </p>
        </form>
      </main>
    </>
  )
}
