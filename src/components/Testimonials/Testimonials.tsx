import testimonialPerson from '../../assets/images/testimonials/testimonialPerson.jpg'
import galleryOne from '../../assets/images/testimonials/galleryOne.jpg'
import galleryTwo from '../../assets/images/testimonials/galleryTwo.jpg'
import galleryThree from '../../assets/images/testimonials/galleryThree.jpg'
import galleryFour from '../../assets/images/testimonials/galleryFour.jpg'
import galleryFive from '../../assets/images/testimonials/galleryFive.jpg'
import gallerySix from '../../assets/images/testimonials/gallerySix.jpg'
import gallerySeven from '../../assets/images/testimonials/gallerySeven.jpg'
import galleryEight from '../../assets/images/testimonials/galleryEight.jpg'
import galleryNine from '../../assets/images/testimonials/galleryNine.jpg'

import { Container } from '../common/Container/Container'

import './Testimonials.css'

const galleryImages = [
  {
    src: galleryOne,
    alt: '',
  },
  {
    src: galleryTwo,
    alt: '',
  },
  {
    src: galleryThree,
    alt: '',
  },
  {
    src: galleryFour,
    alt: '',
  },
  {
    src: galleryFive,
    alt: '',
  },
  {
    src: gallerySix,
    alt: '',
  },
  {
    src: gallerySeven,
    alt: '',
  },    
  {
    src: galleryEight,
    alt: '',
  },
  {
    src: galleryNine,
    alt: '',
  }
]

export function Testimonials() {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonialsLayout">
          <article className="testimonial">
            <h2 className="testimonialTitle">
              What they say about us
            </h2>

            <div
              className="testimonialRating"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            <blockquote className="testimonialQuote">
              <p>
                Slate helps you see how many more days
                you need to work to reach your financial
                goal for the month and year.
              </p>
            </blockquote>

            <div className="testimonialAuthor">
              <img
                src={testimonialPerson}
                alt=""
                className="testimonialAvatar"
              />

              <div>
                <p className="testimonialName">
                  Regina Miles
                </p>

                <p className="testimonialRole">
                  Designer
                </p>
              </div>
            </div>
          </article>

          <div className="testimonialGallery">
            {galleryImages.map((image) => (
              <div
                className="testimonialGalleryItem"
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="testimonialGalleryImage"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}