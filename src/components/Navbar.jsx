import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {FaAirbnb, FaUserCircle} from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi'
import {IoIosMenu, IoIosSearch} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { devices } from '../data/Queries'


// Styles ----------------
const Nav = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;

`
const NavContainer = styled.div`
    padding: 1rem 4rem;
    @media ${devices.laptop}  {
        padding: 1rem 2rem;
    }
    @media ${devices.mobileL} {
        padding: 1rem;
    }
`
// Top Links -------------
const TopLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 650px) {
        display: none ;
    }
`
const LogoGroup = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    text-decoration: none;
    @media ${devices.mobileL} {
        display: none !important;
    }
`
const Logo = styled.span`
    font-size: 2rem;
    margin-top: 10px;
`
const LogoText = styled.span`
    vertical-align: middle;
    font-weight: 600;
    font-size: 1.3rem;
    @media ${devices.tablet} {
        display: none;
    }
`

const TopLinksGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 65%; 
    @media ${devices.laptop}  {
        width: 70%; 
    }
    @media ${devices.tablet} {
        width: 85%;
    }
`

// MidLinks ---------------------
const MidLinks = styled.div`
    display: flex;
    flex-direction: row;
`
const MidLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 .7rem;
    margin-top: 12px;
    font-size: 100%;
    color: #fff;
    text-decoration: none;
    font-family: Circular-Light, sans-serif;
    transition: all 0.3s ease;
    &:hover{
        color: #c0c0c0;
    }
    @media ${devices.laptop} {
        font-size: 90%;
    }
    @media ${devices.tablet} {
        font-size: 80%;
    }
`

const BorderShort = styled.div`
    background-color: #fff;
    margin-top: .2rem;
    width: 5px;
    height: 3px;
    border-radius: 4px;
    visibility: hidden;

    ${MidLink}:hover &{
        visibility: visible;
    }
`

const MidLinksSub = styled(Link)`
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    background-color: #fff;
    padding: .5rem .7rem;
    border-radius: 40px;
    font-size: 90%;
    text-decoration: none;
    box-shadow: 0px 1px 2px #c2c2c27b;
    border: 1px solid #c2c2c27b;
    display: none;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0px 3px 3px #c2c2c27b;
    }

    @media ${devices.tablet} {
        font-size: 80%;
    }
`
const MidSubText = styled.p`
    padding-left: 1rem;
`
const MidSubIcon = styled.p`
    padding: .5rem;
    background-color: #FF385C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

// End MidLinks ----------------------

const EndLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const EndLink = styled(Link)`
    font-size: 85%;
    letter-spacing: .5px;
    font-weight: 600;
    margin: 0 .5rem;
    color: #fff;
    text-decoration: none;
    padding: .7rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    font-family: Circular-Light, sans-serif;
    &:hover{
        background-color: #262626;
    }
    &:nth-child(2){
        margin-right: 1rem;
    }

    @media ${devices.laptop} {
        font-size: 80%;
    }
    @media ${devices.tablet} {
        font-size: 75%;
    }
`
const EndSignGroup = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    background-color: #fff;
    padding: .2rem;
    border-radius: 30px;
`
const EndSign = styled.div`
    padding: 0 .3rem;
    &:last-child{
        color: #7D7D7D;
        font-size: 1.7rem;
    }
`

// Mobile Bar
const MobileBarGroup = styled.div`
    background-color: #fff;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 50px;
    width: 80%;
    display: none;
    @media (max-width: 650px) {
        display: block;
    }
    @media ${devices.mobileL} {
        width: 100%;
        padding: .7rem;
    }
    
`
const MobileBar = styled(Link)`
    color: #FF385C;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const MobileBarText = styled.p`
    color: #000;
    margin-left: .5rem;
    font-size: 90%;
`

// Bottom Links --------------------
const BottomLinks = styled.div`
    width: 80%;
    margin: 0 auto;
    @media ${devices.tablet} {
        width: 90%;
    }
    @media (max-width: 650px) {
        display: none;
    }
`
const BottomGroup = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    background-color: #fff;
    border-radius: 40px;
    font-size: 75%;
`

const BottomContent = styled(Link)`
    border-radius: 40px;    
    padding: 1rem;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;

    &:hover{
        background-color: #EBEBEB;
    }

    &:first-child{
        padding-left: 2rem;
    }
    
    &:last-child{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

`
const BcontentTitle = styled.div`
    font-weight: 600;
    margin-bottom: .3rem;
    font-family: Circular-Light, sans-serif;
`
const BcontentDesc = styled.div`
    color: #857171;
    font-family: Circular-Light, sans-serif;
`

const BottomIcon = styled(Link)`
    font-size: 1.3rem;
    padding: .5rem;
    background-color: #FF385C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    &:hover{
        background-color: #DA0A64;
    }

`

// End Styles -----------------------

const Navbar = () => {
    // Logic ----------------------
        const [visible, setVisible] = useState(false)
        const [visibleLinks, setVisibleLink] = useState()
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolled > 25){
                setVisible(true)
                setVisibleLink(true)
            } 
            else if (scrolled <= 25){
                setVisible(false)
                setVisibleLink(false)
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', toggleVisible);
          
        }, [])

        const handleReveal = () =>{
            setVisibleLink(false)
        }
        
    
    // End Logic ------------------

    // Added Styles -------
    
    return (
        <Nav className={visible ? 'nav-fixed' : null }>
            <NavContainer>
                <TopLinks className={visibleLinks ? 'top-links-fixed' : null}>
                    <LogoGroup to='' className={visible ? 'logo-fixed' : null}>
                        <Logo><FaAirbnb /></Logo>
                        <LogoText>airbnb</LogoText>
                    </LogoGroup>
                    <TopLinksGroup>
                        <MidLinks className={visibleLinks ? 'hide' : 'show-flex'}>
                            <MidLink to='' className={visibleLinks ? null : 'mid-link'}>
                                Places to stay
                                <BorderShort className={visibleLinks ? null : 'border-short-fixed'}></BorderShort>
                            </MidLink>
                            <MidLink to='' className={visibleLinks ? null : 'mid-link'}>
                                Experiences
                                <BorderShort className={visibleLinks ? null : 'border-short-fixed'}></BorderShort>
                            </MidLink>
                            <MidLink to='' className={visibleLinks ? null : 'mid-link'}>
                                Online Experiences
                                <BorderShort className={visibleLinks ? null : 'border-short-fixed'}></BorderShort>
                            </MidLink>
                        </MidLinks>
                        <MidLinksSub to='' className={visibleLinks ? 'show-flex' : 'hide'} onClick={handleReveal}>
                            <MidSubText>Start your search</MidSubText>
                            <MidSubIcon> <IoIosSearch /> </MidSubIcon>
                        </MidLinksSub>
                        <EndLinks>
                            <EndLink to='' className={visible ? 'end-link-fixed' : null}>Become a Host</EndLink>
                            <EndLink to='' className={visible ? 'end-link-fixed' : null}><FiGlobe /></EndLink>
                            <EndSignGroup to='' className={visible ? 'end-sign-fixed' : null}>
                                <EndSign><IoIosMenu /></EndSign>
                                <EndSign><FaUserCircle /></EndSign>
                            </EndSignGroup>
                        </EndLinks>
                    </TopLinksGroup>
                </TopLinks>
                <MobileBarGroup className='mobile-bar'>
                    <MobileBar to=''>
                     <IoIosSearch className='mobile-search'  /> 
                     <MobileBarText>Where are you going?</MobileBarText>
                    </MobileBar>
                </MobileBarGroup>
                <BottomLinks className={visibleLinks ? 'hide' : 'outline-grid'}>
                    <BottomGroup className={visibleLinks ? 'hide' : 'show-grid'}>
                        <BottomContent to=''>
                            <BcontentTitle>Location</BcontentTitle>
                            <BcontentDesc>Where are you going?</BcontentDesc>
                        </BottomContent>
                        <BottomContent to=''>
                            <BcontentTitle>Check in</BcontentTitle>
                            <BcontentDesc>Add dates</BcontentDesc>
                        </BottomContent>
                        <BottomContent to=''>
                            <BcontentTitle>Check out</BcontentTitle>
                            <BcontentDesc>Add dates</BcontentDesc>
                        </BottomContent>
                        <BottomContent to=''>
                            <div >
                                <BcontentTitle>Guests</BcontentTitle>
                                <BcontentDesc>Add guests</BcontentDesc>
                            </div>
                            <BottomIcon to=''>
                                <IoIosSearch />
                            </BottomIcon>
                        </BottomContent>
                    </BottomGroup>
                </BottomLinks>
            </NavContainer>
        </Nav>
    )
}

export default Navbar