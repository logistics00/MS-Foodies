'use client'

import { usePathname } from 'next/navigation'

export default function NotFound() {
  const path = usePathname()
  return (
    <main className='not-found'>
      <h1>Maaltijd is niet gevonden!</h1>
      <p>Helaas konden we het gevraagde pad:{path} ofwel maaltijdgegevens niet vinden!</p>
    </main>
  )
}
