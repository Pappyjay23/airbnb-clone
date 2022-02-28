import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { TopLinksData } from '../data/TopLinksData'
import { CLinksFive, CLinksFour, CLinksOne, CLinksSix, CLinksThree, CLinksTwo } from '../data/CountryLinks'

// Styles
const InspirationContainer = styled.div`
    padding: 3rem;
`
const InspirationHeader = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`
const TopLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    border-bottom: 1px solid #DDDDDD;
    position: relative;
    margin-bottom: 2rem;
`
const TopLink = styled(Link)`
    text-decoration: none;
    color: #717171;
    font-size: 90%;
    border-radius: 7px;
    padding: .7rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #F7F7F7;
    }

    /* &::after{
        content: '';
        background-color: #000;
        height: 2px;
        width: 200px;
        position: absolute;
        left: .5rem;
        bottom: 0;
    } */
`

const CountryLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 3rem;
`
const CountryLink = styled(Link)`
    text-decoration: none;
    font-size: 90%;
`
const City = styled.div`
    font-family: Circular-Light, sans-serif;
    color: #000;
`
const State = styled.div`
    font-family: Circular-Light, sans-serif;
    color: #717171;
`

const MoreLink = styled(Link)`
    font-size: 90%;
    color: #000;
`

const Inspiration = () => {

    // States --------
    const [firstPage, setFirstPage] = useState(true)
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)
    const [fourthPage, setFourthPage] = useState(false)
    const [fifthPage, setFifthPage] = useState(false)
    const [sixthPage, setSixthPage] = useState(false)

    // Functions
    const first = () =>{
        setFirstPage(true)
        setSecondPage(false)
        setThirdPage(false)
        setFourthPage(false)
        setFifthPage(false)
        setSixthPage(false)
    }
    const second = () =>{
        setFirstPage(false)
        setSecondPage(true)
        setThirdPage(false)
        setFourthPage(false)
        setFifthPage(false)
        setSixthPage(false)
    }
    const third = () =>{
        setFirstPage(false)
        setSecondPage(false)
        setThirdPage(true)
        setFourthPage(false)
        setFifthPage(false)
        setSixthPage(false)
    }
    const fourth = () =>{
        setFirstPage(false)
        setSecondPage(false)
        setThirdPage(false)
        setFourthPage(true)
        setFifthPage(false)
        setSixthPage(false)
    }
    const fifth = () =>{
        setFirstPage(true)
        setSecondPage(false)
        setThirdPage(false)
        setFourthPage(false)
        setFifthPage(false)
        setSixthPage(false)
    }
    const sixth = () =>{
        setFirstPage(false)
        setSecondPage(false)
        setThirdPage(false)
        setFourthPage(false)
        setFifthPage(false)
        setSixthPage(true)
    }

  return (
   <InspirationContainer>
       <InspirationHeader>Inspiration for future getaways</InspirationHeader>
       <TopLinks>
        {/* {TopLinksData.map((el) => ( */}
            <TopLink to='' onClick={first}>Destination for arts & culture</TopLink>
            <TopLink to='' onClick={second}>Destination for outdoor adventure</TopLink>
            <TopLink to='' onClick={third}>Mountain cabins</TopLink>
            <TopLink to='' onClick={fourth}>Beach destinations</TopLink>
            <TopLink to='' onClick={fifth}>Popular destinations</TopLink>
            <TopLink to='' onClick={sixth}>Unique Stays</TopLink>
        {/* ))} */}
       </TopLinks>
       <CountryLinks className={firstPage ? 'show-grid' : 'hide'}>
            {CLinksOne.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
            <MoreLink to=''>Show more</MoreLink>
       </CountryLinks>
       <CountryLinks className={secondPage ? 'show-grid' : 'hide'}>
            {CLinksTwo.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
            <MoreLink to=''>Show more</MoreLink>
       </CountryLinks>
       <CountryLinks className={thirdPage ? 'show-grid' : 'hide'}>
            {CLinksThree.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
            <MoreLink to=''>Show more</MoreLink>
       </CountryLinks>
       <CountryLinks className={fourthPage ? 'show-grid' : 'hide'}>
            {CLinksFour.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
            <MoreLink to=''>Show more</MoreLink>
       </CountryLinks>
       <CountryLinks className={fifthPage ? 'show-grid' : 'hide'}>
            {CLinksFive.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
            <MoreLink to=''>Show more</MoreLink>
       </CountryLinks>
       <CountryLinks className={sixthPage ? 'show-grid' : 'hide'}>
            {CLinksSix.map((clink) =>(
                <CountryLink to=''>
                    <City>{clink.city}</City>
                    <State>{clink.state}</State>
                </CountryLink>
            ))}
       </CountryLinks>
   </InspirationContainer>
  )
}

export default Inspiration