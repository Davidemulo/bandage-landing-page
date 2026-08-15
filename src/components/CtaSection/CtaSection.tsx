import ctaBackground from '../../assets/images/cta/ctaBackground.jpg'

import './CtaSection.css'

export function CtaSection() {
  return (
    <section
      className="ctaSection"
      style={{
        backgroundImage: `url(${ctaBackground})`,
      }}
    >
      <div className="ctaSectionContent">
        <p className="ctaSectionEyebrow">
          Designing Better Experience
        </p>

        <h2 className="ctaSectionTitle">
          Problems trying to resolve
          <br />
          the conflict between
        </h2>

        <p className="ctaSectionDescription">
          Problems trying to resolve the conflict between
          our design
        </p>

        <p className="ctaSectionPrice">
          $16.48
        </p>

        <button
          type="button"
          className="ctaSectionButton"
        >
          Add Your Call To Action
        </button>
      </div>
    </section>
  )
}