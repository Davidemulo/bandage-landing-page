import { Container } from '../../common/Container/Container'

import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a
            href="/"
            className="site-header__logo"
            aria-label="E-commerce home"
          >
            Furniture
          </a>

          <nav
            className="site-header__nav"
            aria-label="Primary navigation"
          >
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="site-header__actions">
            <button
              type="button"
              aria-label="Open search"
            >
              Search
            </button>

            <button
              type="button"
              aria-label="Open shopping cart"
            >
              Cart
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}