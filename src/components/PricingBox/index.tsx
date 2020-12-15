import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'
import { getBRL } from 'utils/getBRL'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  priceInstallments,
  numberInstallments,
  button,
  benefits
}: PricingBoxProps) => {
  const discount = numberInstallments * priceInstallments
  const formatedDiscount = getBRL(discount)
  const formatedTotalPrice = getBRL(totalPrice)
  const formatedPriceInstallments = getBRL(priceInstallments)
  const formatedNumberInstallments = `${numberInstallments}x`

  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>{formatedTotalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{formatedNumberInstallments} de</span>{' '}
          {formatedPriceInstallments}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

      <Button href={button.url} onClick={onClick} withPrice>
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>{formatedTotalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>{formatedDiscount}</S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
