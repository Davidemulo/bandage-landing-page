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
        <div className="container footerBrandRow">
          <a
            href="/"
            className="footerLogo"
          >
            Bandage
          </a>

          <div className="footerSocials">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>

            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>

            <a href="#twitter" aria-label="Twitter">
              ♥
            </a>
          </div>
        </div>
      </div>

      <div className="footerMain">
        <div className="container footerGrid">
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

          <div className="footerColumn">
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
                  type="email"
                  placeholder="Your Email"
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
      </div>

      <div className="footerBottom">
        <div className="container">
          <p>
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}