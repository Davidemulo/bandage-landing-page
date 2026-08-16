import furnitureImage from '../../assets/images/hero/furniture.png'
import plantImage from '../../assets/images/hero/plant.png'
import lampImage from '../../assets/images/hero/lamp.png'
import decorImage from '../../assets/images/hero/decor.png'

import { Container } from '../../components/common/Container/Container'

import './Hero.css'

type HeroCardProps = {
  image: string
  items: number
  title: string
  large?: boolean
}

function HeroCard({
  image,
  items,
  title,
  large = false,
}: HeroCardProps) {
  return (
    <article
      className={`heroCard ${
        large ? 'heroCardLarge' : ''
      }`}
    >
      <img
        src={image}
        alt=""
        className="heroCardImage"
      />

      <div className="heroCardContent">
        <span className="heroCardItems">
          {items} Items
        </span>

        <h2 className="heroCardTitle">
          {title}
        </h2>

        <a
          href="#shop"
          className="heroCardLink"
        >
          Read More
        </a>
      </div>
    </article>
  )
}

export function Hero() {
  return (
    <section
      className="hero"
      aria-label="Featured furniture categories"
    >
      <Container>
        <div className="heroGrid">
          <HeroCard
            image={furnitureImage}
            items={5}
            title="Furniture"
            large
          />

          
          <div className="heroSide">
           
            <HeroCard
              image={plantImage}
              items={5}
              title="Furniture"
            />

            
            <div className="heroBottomGrid">
              <HeroCard
                image={lampImage}
                items={5}
                title="Furniture"
              />

              <HeroCard
                image={decorImage}
                items={5}
                title="Furniture"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}