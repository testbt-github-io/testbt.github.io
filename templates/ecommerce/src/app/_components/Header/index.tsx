{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { fetchGlobals } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'

export async function Header() {
  const { header } = await fetchGlobals()

  return (
    <>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            {/* Cannot use the `<picture>` element here with `srcSet`
              This is because the theme is able to be overridden by the user
              And so `@media (prefers-color-scheme: dark)` will not work
              Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
            */}
            <img
              className={classes.logo}
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-light.svg"
            />
          </Link>
          <HeaderNav header={header} />
        </Gutter>
      </header>
    </>
  )
}
