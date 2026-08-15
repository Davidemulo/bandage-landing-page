import { Container } from '../common/Container/Container'

import facebookIcon from '../../assets/icons/facebookBlue.svg'
import instagramIcon from '../../assets/icons/instagramBlue.svg'
import twitterIcon from '../../assets/icons/xBlue.svg'

import './Footer.css'

const footerColumns = [
  {
    title: 'Company Info',
    links: [
      'About Us',
      'Carrier',
      'We Are Hiring',
      'Blog',
    ],
  },
  {
    title: 'Legal',
    links: [
      'About Us',
      'Carrier',
      'We Are Hiring',
      'Blog',
    ],
  },
  {
    title: 'Features',
    links: [
      'Business Marketing',
      'User Analytics',
      'Live Chat',
      'Unlimited Support',
    ],
  },
  {
    title: 'Resources',
    links: [
      'IOS & Android',
      'Watch & Demo',
      'Customers',
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <Container>
          <div className="footerBrandRow">
            <a
              href="/"
              className="footerLogo"
              aria-label="Bandage home"
            >
              Bandage
            </a>

            <div className="footerSocials">
              <a
                href="#facebook"
                className="footerSocialLink"
                aria-label="Facebook"
              >
                <img
                  src={facebookIcon}
                  alt=""
                  className="footerSocialIcon"
                />
              </a>

              <a
                href="#instagram"
                className="footerSocialLink"
                aria-label="Instagram"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  className="footerSocialIcon"
                />
              </a>

              <a
                href="#twitter"
                className="footerSocialLink"
                aria-label="Twitter"
              >
                <img
                  src={twitterIcon}
                  alt=""
                  className="footerSocialIcon"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer links */}
      <div className="footerMain">
        <Container>
          <div className="footerGrid">
            {footerColumns.map((column) => (
              <div
                className="footerColumn"
                key={column.title}
              >
                <h2 className="footerColumnTitle">
                  {column.title}
                </h2>

                <ul className="footerLinks">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="footerColumn footerNewsletter">
              <h2 className="footerColumnTitle">
                Get In Touch
              </h2>

              <form className="footerForm">
                <label
                  htmlFor="footerEmail"
                  className="srOnly"
                >
                  Your Email
                </label>

                <div className="footerInputGroup">
                  <input
                    id="footerEmail"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email"
                  />

                  <button type="submit">
                    Subscribe
                  </button>
                </div>

                <p className="footerFormNote">
                  Lore ipsum dolor amit
                </p>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="footerBottom">
        <Container>
          <p className="footerCopyright">
            Made With Love By Finland All Right Reserved
          </p>
        </Container>
      </div>
    </footer>
  )
}