import React from 'react'
import styled from 'styled-components'
import {FaAirbnb, FaUserCircle} from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi'
import {IoIosMenu, IoIosSearch} from 'react-icons/io'
import { Link } from 'react-router-dom'

// Styles
const Nav = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;

`
const NavContainer = styled.div`
    padding: 1rem 5rem;
`
const TopLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`
const LogoGroup = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    text-decoration: none;
`
const Logo = styled.span`
    font-size: 2.5rem;
`
const LogoText = styled.span`
    vertical-align: middle;
    font-weight: 600;
    font-size: 1.3rem;
`
const MidLinks = styled.div`
    display: flex;
    flex-direction: row;
`
const MidLink = styled(Link)`
    margin: 0 .5rem;
    font-size: 85%;
    color: #fff;
    text-decoration: none;
    /* border-bottom: 2px solid transparent; */
    /* padding-bottom: .5rem; */
    transition: all 0.3s ease;
    &:hover{
        color: #c0c0c0;
        /* border-bottom: 2px solid #fff; */
    }
`
const EndLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const EndLink = styled(Link)`
    font-size: 80%;
    font-weight: 600;
    margin: 0 .5rem;
    color: #fff;
    text-decoration: none;
    padding: .7rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #262626;
    }
    &:nth-child(2){
        margin-right: 1rem;
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
const BottomLinks = styled.div`
    width: 80%;
    margin: 0 auto;

`
const BottomGroup = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    background-color: #fff;
    border-radius: 40px;
    font-size: 70%;
`
const BottomContent = styled(Link)`
    /* border-right: 1px solid #7D7D7D; */
    border-radius: 30px;    
    padding: 1rem;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;
    &:hover{
        background-color: #EBEBEB;
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
`
const BcontentDesc = styled.div`
    color: #857171;
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

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <TopLinks>
                    <LogoGroup to=''>
                        <Logo><FaAirbnb /></Logo>
                        <LogoText>airbnb</LogoText>
                    </LogoGroup>
                    <MidLinks>
                        <MidLink to=''>Places to stay</MidLink>
                        <MidLink to=''>Experiences</MidLink>
                        <MidLink to=''>Online Experiences</MidLink>
                    </MidLinks>
                    <EndLinks>
                        <EndLink to=''>Become a Host</EndLink>
                        <EndLink to=''><FiGlobe /></EndLink>
                        <EndSignGroup to=''>
                            <EndSign><IoIosMenu /></EndSign>
                            <EndSign><FaUserCircle /></EndSign>
                        </EndSignGroup>
                    </EndLinks>
                </TopLinks>
                <BottomLinks>
                    <BottomGroup>
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