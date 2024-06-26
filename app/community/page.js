import Image from 'next/image'

import mealIcon from '@/assets/icons/meal.png'
import communityIcon from '@/assets/icons/community.png'
import eventsIcon from '@/assets/icons/events.png'
import classes from './page.module.css'

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Een gedeelde passie: <span className={classes.highlight}>Eten</span>
        </h1>
        <p>Sluit je aan bij onze community en deel je favoriete recepten!</p>
      </header>
      <main className={classes.main}>
        <h2>Voordelen van de community</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt='A delicious meal' />
            <p>Deel en ontdek recepten</p>
          </li>
          <li>
            <Image src={communityIcon} alt='A crowd of people, cooking' />
            <p>Vind gelijkgestemden</p>
          </li>
          <li>
            <Image src={eventsIcon} alt='A crowd of people at a cooking event' />
            <p>Neem deel aan exclusieve evenementen</p>
          </li>
        </ul>
      </main>
    </>
  )
}
