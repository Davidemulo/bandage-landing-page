import { useEffect, useState } from 'react'

import { useLazyGetProductsQuery } from '../../services/productsApi'

import type { Product } from '../../types/product'

import { Container } from '../../components/common/Container/Container'
import { ProductCard } from '../../features/ProductCard/ProductCard'

import './ProductSection.css'

const productsPerPage = 8

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [skip, setSkip] = useState(0)

  const [
    fetchProducts,
    {
      data,
      isFetching,
      isError,
    },
  ] = useLazyGetProductsQuery()

  useEffect(() => {
    fetchProducts({
      limit: productsPerPage,
      skip: 0,
    })
  }, [fetchProducts])

  useEffect(() => {
    if (!data) {
      return
    }

    setProducts((currentProducts) => {
      if (data.skip === 0) {
        return data.products
      }

      return [
        ...currentProducts,
        ...data.products,
      ]
    })
  }, [data])

  const hasMoreProducts =
    products.length < (data?.total ?? 0)

  const handleLoadMore = async () => {
    if (isFetching || !hasMoreProducts) {
      return
    }

    const nextSkip = skip + productsPerPage

    setSkip(nextSkip)

    await fetchProducts({
      limit: productsPerPage,
      skip: nextSkip,
    })
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
            Problems trying to resolve the conflict
            between
          </p>
        </header>

        {isError && products.length === 0 && (
          <p className="productSectionMessage">
            Unable to load products. Please try
            again.
          </p>
        )}

        {products.length > 0 && (
          <>
            <div className="productGrid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {hasMoreProducts && (
              <button
                type="button"
                className="loadMoreButton"
                onClick={handleLoadMore}
                disabled={isFetching}
              >
                {isFetching
                  ? 'Loading...'
                  : 'Load More Products'}
              </button>
            )}
          </>
        )}

        {isFetching && products.length === 0 && (
          <p className="productSectionMessage">
            Loading products...
          </p>
        )}
      </Container>
    </section>
  )
}