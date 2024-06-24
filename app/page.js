import Link from 'next/link'

import classes from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>Heerlijk Eten voor smulpapen</h1>
            <p>Recepten binnen de Mollers-familie</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>De Mollers gemeenschap</Link>
            <Link href='/meals'>Recepten</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Hoe werkt Heerlijk Eten?</h2>
          <p>Heerlijk Eten is een platform voor smulpapen voor het ontdekken en delen van nieuwe recepten.</p>
        </section>

        <section className={classes.section}>
          <h2>Waarom Heerlijk Eten?</h2>
          <p>
            Heerlijk Eten is een platform voor smulpapen waarop zij hun favoriete recepten met anderen kunnen delen.
          </p>
          <p>Heerlijk Eten is een omgeving om nieuwe gerechten te ontdekken.</p>
        </section>
      </main>
    </>
  )
}
