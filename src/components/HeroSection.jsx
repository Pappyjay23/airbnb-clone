import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeroBgd from '../images/hero-bgd.jpg'
import { devices } from '../data/Queries'

// Styles
const Hero = styled.div`
    background-color: #000;
    height: 100vh;
`
const HeroContainer = styled.div`
    padding: 1rem 5rem;
    @media ${devices.tablet} {
        padding: 1rem 3rem;
    }
    @media ${devices.mobileL} {
        padding: 1rem 1.5rem;
    }
`
const HeroCard = styled.div`
    background-image: url(${HeroBgd});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 90vh;
    color: #fff;
    position: relative;
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 100px;
    padding: 0 .5rem;
    width: 100%;
    margin: 0 auto;
`
const HeroText = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
    @media ${devices.tablet} {
        font-size: 2rem;
    }
`
const HeroButton = styled(Link)`
    padding: 1rem 2rem;
    background-color: #fff;
    border-radius: 50px;
    text-decoration: none;
`
const BtnText = styled.span`
    background-color: red;
    background-image: linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%);
    background-repeat: repeat-x;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
`

const HeroSection = () => {
  return (
    <Hero>
        <HeroContainer>
            <HeroCard>
                <HeroContent>
                    <HeroText>Not sure where to go? Perfect.</HeroText>
                    <HeroButton to=''>
                        <BtnText>I'm flexible</BtnText>
                    </HeroButton>
                </HeroContent>
            </HeroCard>
        </HeroContainer>
    </Hero>
  )
}

export default HeroSection