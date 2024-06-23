import Link from 'next/link'

import logoImg from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
      <Link href='/'>Home</Link>
      <img src={logoImg.src} alt='A plate with food on it' />
      NextLevel Food
      <nav>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
