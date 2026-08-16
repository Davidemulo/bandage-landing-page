import easyWinsIcon from '../../assets/icons/easyWins.svg'
import concreteIcon from '../../assets/icons/concrete.svg'
import hackGrowthIcon from '../../assets/icons/hackGrowth.svg'


import { Container } from '../../components/common/Container/Container'

import './Services.css'

type Service = {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Easy Wins',
    description:
      'Get your best looking smile now!',
    icon: easyWinsIcon,
  },
  {
    title: 'Concrete',
    description:
      'Delicate facts focused in helping you discover your most beautiful smile.',
    icon: concreteIcon,
  },
  {
    title: 'Hack Growth',
    description:
      'Overcome any hurdle or any other problem.',
    icon: hackGrowthIcon,
  },
]

export function Services() {
  return (
    <section className="services">
      <Container>
        <header className="servicesHeader">
          <p className="servicesEyebrow">
            Featured Products
          </p>

          <h2 className="servicesTitle">
            The Best Services
          </h2>

          <p className="servicesDescription">
            Problems trying to resolve the conflict between
          </p>
        </header>

        <div className="servicesGrid">
          {services.map((service) => (
            <article
              className="serviceItem"
              key={service.title}
            >
              <div className="serviceIcon">
                    <img
                        src={service.icon}
                        alt=""
                    />
                </div>

              <h3 className="serviceTitle">
                {service.title}
              </h3>

              <p className="serviceDescription">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}