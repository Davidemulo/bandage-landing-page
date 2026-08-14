import type { Product } from '../../types/product'

import './ProductCard.css'

type ProductCardProps = {
  product: Product
}

export function ProductCard({
  product,
}: ProductCardProps) {
  const discountedPrice =
    product.price *
    (1 - product.discountPercentage / 100)

  return (
    <article className="productCard">
      <div className="productCardImageWrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="productCardImage"
        />
      </div>

      <div className="productCardContent">
        <h3 className="productCardTitle">
          {product.title}
        </h3>

        <p className="productCardDepartment">
          {product.category}
        </p>

        <div className="productCardPrice">
          <span className="productCardOriginalPrice">
            ${product.price.toFixed(2)}
          </span>

          <span className="productCardDiscountPrice">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  )
}