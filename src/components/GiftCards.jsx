import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Image from '../images/gift-card.jpg'

// Styles
const GiftCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 2rem 4rem;

`
const GiftCardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`
const GiftCardText = styled.div`
  font-size: 2.7rem;
  letter-spacing: -2px;
  margin-bottom: 2rem;
`
const GiftCardButton = styled(Link)`
  padding: 1rem;
  background: #000;
  color: #fff;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
`
const GiftCardImage = styled.img`
  width: 70%;
`

const GiftCards = () => {
  return (
    <GiftCard>
        <GiftCardTextContent>
          <GiftCardText>Shop Airbnb <br /> gift cards</GiftCardText>
          <GiftCardButton to=''>Learn more</GiftCardButton>
        </GiftCardTextContent>
        <GiftCardImage src={Image}></GiftCardImage>
    </GiftCard>
  )
}

export default GiftCards