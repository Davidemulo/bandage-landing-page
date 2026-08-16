import { useState } from 'react'

import phoneIcon from '../../../assets/icons/phone.svg'
import emailIcon from '../../../assets/icons/mail.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import youtubeIcon from '../../../assets/icons/youtube.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'
import twitterIcon from '../../../assets/icons/x.svg'
import userIcon from '../../../assets/icons/user.svg'
import searchIcon from '../../../assets/icons/search.svg'
import cartIcon from '../../../assets/icons/cart.svg'
import heartIcon from '../../../assets/icons/heart.svg'
import arrowDownIcon from '../../../assets/icons/arrowDown.svg'

import {
  useAppSelector,
} from '../../../app/hooks'

import { Container } from '../../common/Container/Container'

import './Header.css'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const cartCount = useAppSelector(
    (state) => state.shop.cart.length,
  )

  const wishlistCount = useAppSelector(
    (state) => state.shop.wishlist.length,
  )

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="siteHeader">

      <div className="announcementBar">
        <Container variant="header">
          <div className="announcementBarInner">
            <div className="announcementContact">
              <a href="tel:2255550118">
                <img
                  src={phoneIcon}
                  alt=""
                  className="announcementIcon"
                />

                <span>(225) 555-0118</span>
              </a>

              <a href="mailto:michael.rivera@example.com">
                <img
                  src={emailIcon}
                  alt=""
                  className="announcementIcon"
                />

                <span>
                  michelle.rivera@example.com
                </span>
              </a>
            </div>

            <p className="announcementMessage">
              Follow Us and get a chance to win 80% off
            </p>

            <div className="announcementSocial">
              <span>Follow Us:</span>

              <a
                href="#instagram"
                aria-label="Instagram"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  className="announcementSocialIcon"
                />
              </a>

              <a
                href="#youtube"
                aria-label="Youtube"
              >
                <img
                  src={youtubeIcon}
                  alt=""
                  className="announcementSocialIcon"
                />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
              >
                <img
                  src={facebookIcon}
                  alt=""
                  className="announcementSocialIcon"
                />
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
              >
                <img
                  src={twitterIcon}
                  alt=""
                  className="announcementSocialIcon"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <nav
        className="mainNavigation"
        aria-label="Primary navigation"
      >
        <Container variant="header">
          <div className="mainNavigationInner">

            {/* Logo */}

            <a
              href="/"
              className="siteHeaderLogo"
              aria-label="Bandage home"
              onClick={closeMobileMenu}
            >
              Bandage
            </a>

            {/* Desktop Navigation */}

            <div className="siteHeaderNav">
              <a href="#home">Home</a>

              <a
                href="#shop"
                className="shopLink"
              >
                <span>Shop</span>

                <img
                  src={arrowDownIcon}
                  alt=""
                  className="shopChevronIcon"
                />
              </a>

              <a href="#about">About</a>

              <a href="#blog">Blog</a>

              <a href="#contact">Contact</a>

              <a href="#pages">Pages</a>
            </div>

            {/* Desktop Actions */}

            <div className="siteHeaderActions">

              <a
                href="#login"
                className="loginLink"
              >
                <img
                  src={userIcon}
                  alt=""
                  className="headerUserIcon"
                />

                <span>Login / Register</span>
              </a>

              <button
                type="button"
                className="headerIconButton"
                aria-label="Search"
              >
                <img
                  src={searchIcon}
                  alt=""
                  className="headerIcon"
                />
              </button>

              {/* Cart */}

              <button
                type="button"
                className="headerIconButton headerIconButtonWithBadge"
                aria-label={`Shopping cart, ${cartCount} items`}
              >
                <img
                  src={cartIcon}
                  alt=""
                  className="headerIcon"
                />

                {cartCount > 0 && (
                  <span className="headerIconBadge">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Wishlist */}

              <button
                type="button"
                className="headerIconButton headerIconButtonWithBadge"
                aria-label={`Wishlist, ${wishlistCount} items`}
              >
                <img
                  src={heartIcon}
                  alt=""
                  className="headerIcon"
                />

                {wishlistCount > 0 && (
                  <span className="headerIconBadge">
                    {wishlistCount}
                  </span>
                )}
              </button>

            </div>

            {/* Mobile Actions */}

            <div className="mobileHeaderActions">

              <button
                type="button"
                className="mobileHeaderIconButton"
                aria-label="Search"
              >
                <img
                  src={searchIcon}
                  alt=""
                  className="mobileHeaderIcon"
                />
              </button>

              <button
                type="button"
                className="mobileHeaderIconButton mobileHeaderIconButtonWithBadge"
                aria-label={`Shopping cart, ${cartCount} items`}
              >
                <img
                  src={cartIcon}
                  alt=""
                  className="mobileHeaderIcon"
                />

                {cartCount > 0 && (
                  <span className="mobileHeaderIconBadge">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                className={`mobileMenuButton ${
                  isMobileMenuOpen
                    ? 'mobileMenuButtonOpen'
                    : ''
                }`}
                aria-label={
                  isMobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span />
                <span />
                <span />
              </button>

            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}

        <div
          className={`mobileNavigation ${
            isMobileMenuOpen
              ? 'mobileNavigationOpen'
              : ''
          }`}
        >
          <nav
            className="mobileNavigationLinks"
            aria-label="Mobile navigation"
          >
            <a
              href="#home"
              onClick={closeMobileMenu}
            >
              Home
            </a>

            <a
              href="#product"
              onClick={closeMobileMenu}
            >
              Product
            </a>

            <a
              href="#pricing"
              onClick={closeMobileMenu}
            >
              Pricing
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </nav>
    </header>
  )
}