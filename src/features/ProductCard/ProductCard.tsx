import { useEffect, useState } from 'react'

import type { Product } from '../../types/product'

import {
  addToBasket,
  toggleWishlist,
} from '../../app/shopSlice'

import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks'

import heartHoverIcon from '../../assets/icons/heartHover.svg'
import mergeIcon from '../../assets/icons/merge.svg'

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

  const dispatch = useAppDispatch()

  const [heartSelected, setHeartSelected] =
    useState(false)

  const isInWishlist = useAppSelector(
    (state) =>
      state.shop.wishlist.some(
        (item) => item.id === product.id,
      ),
  )

  const isOutOfStock = product.stock <= 0

  useEffect(() => {
    if (!heartSelected) {
      return
    }

    const timer = window.setTimeout(() => {
      setHeartSelected(false)
    }, 1500)

    return () => {
      window.clearTimeout(timer)
    }
  }, [heartSelected])

  return (
    <article
      className={`productCard ${
        isOutOfStock
          ? 'productCard--outOfStock'
          : ''
      }`}
    >
      <div className="productCardImageWrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="productCardImage"
        />

        {isOutOfStock && (
          <span className="productCardStockLabel">
            Out of stock
          </span>
        )}

        <div className="productCardActions">
          <button
            type="button"
            className={`productCardAction ${
              heartSelected
                ? 'productCardAction--selected'
                : ''
            }`}
            aria-label={
              isInWishlist
                ? 'Remove from wishlist'
                : 'Add to wishlist'
            }
            onClick={() => {
              dispatch(toggleWishlist(product))
              setHeartSelected(true)
            }}
          >
            <img
              src={heartHoverIcon}
              alt=""
            />
          </button>

          <button
            type="button"
            className="productCardAction"
            aria-label="Compare product"
          >
            <img
              src={mergeIcon}
              alt=""
            />
          </button>
        </div>

        {!isOutOfStock &&
          product.discountPercentage > 0 && (
            <span className="productCardDiscount">
              -{Math.round(
                product.discountPercentage,
              )}
              %
            </span>
          )}
      </div>

      <div className="productCardContent">
        <h3 className="productCardTitle">
          {product.title}
        </h3>

        <p className="productCardDepartment">
          {product.category}
        </p>

        <div className="productCardPrice">
          {product.discountPercentage > 0 ? (
            <>
              <span className="productCardOriginalPrice">
                ${product.price.toFixed(2)}
              </span>

              <span className="productCardDiscountPrice">
                ${discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="productCardDiscountPrice">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className="productCardBasketButton"
        disabled={isOutOfStock}
        onClick={() =>
          dispatch(addToBasket(product))
        }
      >
        Add to Basket
      </button>
    </article>
  )
}