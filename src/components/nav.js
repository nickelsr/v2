import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Logo } from '@icons';
import {
  header,
  nav,
  linkContainer,
  link,
  logo
} from '@styles/nav.module.css'

const Nav = () => {
  return (
    <header className={header}>
      <nav className={nav}>
        <div className={logo}>
          <Logo />
        </div>
        <div className={linkContainer}>
          {
            navLinks.map(({ name, url }) => (
              <Link className={link} to={url}>{name}</Link>
            ))
          }
        </div>
      </nav>
    </header>
  )
}

export default Nav;