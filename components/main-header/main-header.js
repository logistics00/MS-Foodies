import Link from 'next/link'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='A plate with food on it' priority />
          Heerlijk Eten
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Maaltijden</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Personen</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
