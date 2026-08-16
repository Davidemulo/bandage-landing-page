import { useEffect } from 'react'

import {
  closeBasketModal,
} from '../../../app/shopSlice'

import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/hooks'

import './BasketModal.css'

export function BasketModal() {
  const dispatch = useAppDispatch()

  const basketModalProduct =
    useAppSelector(
      (state) => state.shop.basketModalProduct,
    )

  useEffect(() => {
    if (!basketModalProduct) {
      return
    }

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        dispatch(closeBasketModal())
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape,
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape,
      )
    }
  }, [basketModalProduct, dispatch])

  if (!basketModalProduct) {
    return null
  }

  const discountedPrice =
    basketModalProduct.price *
    (1 -
      basketModalProduct.discountPercentage / 100)

  const displayPrice =
    basketModalProduct.discountPercentage > 0
      ? discountedPrice
      : basketModalProduct.price

  return (
    <div
      className="basketModalOverlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          dispatch(closeBasketModal())
        }
      }}
    >
      <div
        className="basketModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="basketModalTitle"
      >
        <div className="basketModalHeader">
          <h2 id="basketModalTitle">
            Successfully added to basket
          </h2>

          <button
            type="button"
            className="basketModalClose"
            aria-label="Close"
            onClick={() =>
              dispatch(closeBasketModal())
            }
          >
            ×
          </button>
        </div>

        <div className="basketModalProduct">
          <div className="basketModalImageWrapper">
            <img
              src={basketModalProduct.thumbnail}
              alt={basketModalProduct.title}
              className="basketModalImage"
            />
          </div>

          <div className="basketModalProductInfo">
            <p className="basketModalProductTitle">
              {basketModalProduct.title}
            </p>

            <p className="basketModalProductPrice">
              ${displayPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}