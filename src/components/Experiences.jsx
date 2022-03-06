import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import GridOneImg from '../images/trip-bgd.jpg'
import GridTwoImg from '../images/home-bgd.jpg'
import { devices } from '../data/Queries'


// Styles
const Experience = styled.div`
    background-color: #fff;
`
const ExperienceContainer = styled.div`
    padding: 4rem;
    @media ${devices.tablet} {
        padding: 2rem;
    }
`
const ExperienceHeader = styled.div`
    font-size: 2.1rem;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    @media ${devices.mobileL} {
        font-size: 1.7rem;
        width: 70%;
    }
    @media ${devices.mobileS} {
        font-size: 1.5rem;
        width: 80%;
    }
`
const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    @media ${devices.tablet} {
        column-gap: 1.5rem;
    }
    @media (max-width: 670px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
`
const EgridOne = styled.div`
    background-image: url(${GridOneImg});
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 500px;
    padding: 2rem;
    border-radius: 10px;
    @media ${devices.tablet} {
        height: 350px;
    }
    @media ${devices.mobileL} {
        padding: 1rem;
    }
`
const EgridTwo = styled.div`
    background-image: url(${GridTwoImg});
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 500px;
    padding: 2rem;
    border-radius: 10px;
    @media ${devices.tablet} {
        height: 350px;
    }
    @media ${devices.mobileL} {
        padding: 1rem;
    }
`
const GridText = styled.div`
    font-size: 2.5rem;
    letter-spacing: -2px;
    /* font-family: Circular-Bold, sans-serif; */
    width: 60%;
    margin-bottom: 2rem;
    @media ${devices.tablet} {
        width: 80%;
        font-size: 2.2rem;
    }
    @media ${devices.mobileL} {
        width: 70%;
        font-size: 2.2rem;
    }
    @media ${devices.mobileS} {
        width: 70%;
        font-size: 1.8rem;
    }
`
const GridButton = styled(Link)`
    color: #000;
    text-decoration: none;
    background-color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #EBEBEB;
    }

    @media ${devices.tablet} {
        font-size: 80%;
        padding: .7rem 1.3rem;
        border-radius: 5px;
    }

`

const Experiences = () => {
  return (
    <Experience>
        <ExperienceContainer>
            <ExperienceHeader>Discover Airbnb Experiences</ExperienceHeader>
            <ExperienceGrid>
                <EgridOne>
                    <GridText>Things to do on your trip</GridText>
                    <GridButton to=''>Experiences</GridButton>
                </EgridOne>
                <EgridTwo>
                    <GridText>Things to do from home</GridText>
                    <GridButton to=''>Online Experiences</GridButton>
                </EgridTwo>
            </ExperienceGrid>
        </ExperienceContainer>
    </Experience>
  )
}

export default Experiences