import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FooterLinks } from '../data/FooterLinks'
import {FiGlobe} from 'react-icons/fi'
import {ImTwitter, ImFacebook, ImInstagram} from 'react-icons/im'

// Styles
const FooterContainer = styled.div`
    padding: 4rem 4rem 0 4rem;
    background-color: #F7F7F7;
`
const TopFooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #cac9c975;
`
const LinkGroup = styled.div``
const LinkGroupHeader = styled.p`
    font-size: 90%;
    margin-bottom: 1rem;
`
const FooterLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const FooterLinkItem = styled(Link)`
    font-family: Circular-Light, sans-serif;
    font-size: 90%;
    margin-bottom: 1rem;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover{
        text-decoration: underline;
    }
`
const BottomFooterLinks = styled.div`
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const LeftSet = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const LeftText = styled.p`
    font-family: Circular-Light, sans-serif;
    font-size: 90%;
    margin-right: .5rem;
`
const Dot = styled.span`
   color: #000;
   margin-right: .5rem;
   margin-top: -5px;
`
const LeftLink = styled(Link)`
    font-family: Circular-Light, sans-serif;
    font-size: 90%;
    margin-right: .5rem;
    text-decoration: none;
    color: #000;

    &:hover{
        text-decoration: underline;
    }
`
const RightSet = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const RightGroupOne = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 2rem;
    font-size: 90%;
`
const RightLink = styled(Link)`
    margin: 0 .5rem;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: row ;
    align-items: center;
    font-family: Circular-Light, sans-serif;
`
const RightLinkDec = styled(Link)`
    margin: 0 .5rem;
    color: #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
const RightGroupTwo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
  return (
    <FooterContainer>
        <TopFooterLinks>
            {FooterLinks.map((group) => (
                <LinkGroup>
                    <LinkGroupHeader>{group.header}</LinkGroupHeader>
                    <FooterLink>
                        {group.links.map((link) => (
                            <FooterLinkItem to=''>{link}</FooterLinkItem>
                        ))}
                    </FooterLink>
                </LinkGroup>
            ))}
        </TopFooterLinks>
        <BottomFooterLinks>
            <LeftSet>
                <LeftText>© 2022 Airbnb, Inc.</LeftText>
                <Dot>.</Dot>
                <LeftLink to=''>Privacy</LeftLink>
                <Dot>.</Dot>
                <LeftLink to=''>Terms</LeftLink>
                <Dot>.</Dot>
                <LeftLink to=''>Sitemap</LeftLink>
            </LeftSet>
            <RightSet>
                <RightGroupOne>
                    <RightLink to=''><FiGlobe /><RightLinkDec to=''>English(US)</RightLinkDec></RightLink>
                    <RightLink to=''>$ <RightLinkDec to=''>USD</RightLinkDec></RightLink>
                </RightGroupOne>
                <RightGroupTwo>
                    <RightLink to=''><ImFacebook /></RightLink>
                    <RightLink to=''><ImTwitter /></RightLink>
                    <RightLink to=''><ImInstagram /></RightLink>                                      
                </RightGroupTwo>
            </RightSet>
        </BottomFooterLinks>
    </FooterContainer>
  )
}

export default Footer