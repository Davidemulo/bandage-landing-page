import { useGetProductsQuery } from '../../services/productsApi'

import { Container } from '../common/Container/Container'
import { ProductCard } from '../ProductCard/ProductCard'

import './ProductSection.css'

export function ProductSection() {
  const {
    data,
    isLoading,
    isError,
  } = useGetProductsQuery()

  if (isLoading) {
    return (
      <section className="productSection">
        <Container>
          <div className="productSectionHeader">
            <p className="sectionEyebrow">
              Featured Products
            </p>

            <h2 className="sectionTitle">
              Bestseller Products
            </h2>

            <p className="sectionDescription">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <p className="productSectionMessage">
            Loading products...
          </p>
        </Container>
      </section>
    )
  }

  if (isError || !data) {
    return (
      <section className="productSection">
        <Container>
          <div className="productSectionHeader">
            <p className="sectionEyebrow">
              Featured Products
            </p>

            <h2 className="sectionTitle">
              Bestseller Products
            </h2>
          </div>

          <p className="productSectionMessage">
            Unable to load products. Please try again.
          </p>
        </Container>
      </section>
    )
  }

  return (
    <section
      className="productSection"
      id="shop"
    >
      <Container>
        <header className="productSectionHeader">
          <p className="sectionEyebrow">
            Featured Products
          </p>

          <h2 className="sectionTitle">
            Bestseller Products
          </h2>

          <p className="sectionDescription">
            Problems trying to resolve the conflict between
          </p>
        </header>

        <div className="productGrid">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <button
          type="button"
          className="loadMoreButton"
        >
          Load More Products
        </button>
      </Container>
    </section>
  )
}