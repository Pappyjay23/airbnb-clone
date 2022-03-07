import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Image from '../images/gift-card.jpg'
import { devices } from '../data/Queries'

// Styles
const GiftCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0 2rem 3rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  @media (max-width: 660px){
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 660px){
    padding: 2rem 0 2rem 1.3rem;
  }
`
const GiftCardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 660px){
    margin-bottom: 4rem;
    width: 60%;
  }
`
const GiftCardText = styled.div`
  font-size: 2.7rem;
  letter-spacing: -2px;
  margin-bottom: 1.5rem;
  @media ${devices.tablet} {
    font-size: 2.2rem;
  }
  @media ${devices.mobileM} {
    font-size: 2rem;
  }
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
  @media (max-width: 660px){
    width: 130px;
  }
`
const GiftCardImage = styled.img`
  width: 65%;
  position: absolute;
  right: -40px;
  @media (max-width: 660px){
    width: 200%;
    position: relative;
    right: 0;
  }
`

const GiftCards = () => {
  return (
    <GiftCard>
        <GiftCardTextContent>
          <GiftCardText>Shop Airbnb <br /> gift cards</GiftCardText>
          <GiftCardButton to=''>Learn more</GiftCardButton>
        </GiftCardTextContent>
        <GiftCardImage src={Image} />
    </GiftCard>
  )
}

export default GiftCards