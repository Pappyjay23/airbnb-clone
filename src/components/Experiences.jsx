import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Experience = styled.div`
    background-color: #fff;
`
const ExperienceContainer = styled.div`
    padding: 4rem;
`
const ExperienceHeader = styled.div`
    font-size: 2.3rem;
    margin-bottom: 2rem;
`
const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
`
const EgridOne = styled.div`
    background-image: url('images/trip-bgd.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 500px;
    padding: 2rem;
    border-radius: 10px;
`
const EgridTwo = styled.div`
    background-image: url('images/home-bgd.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    height: 500px;
    padding: 2rem;
    border-radius: 10px;
`
const GridText = styled.div`
    font-size: 2.5rem;
    font-family: Circular-Bold, sans-serif;
    width: 50%;
    margin-bottom: 2rem;
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