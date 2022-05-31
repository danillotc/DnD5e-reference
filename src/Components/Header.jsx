import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.div`
    height: 5em;
    width: 100%;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    `

const Title = styled.h1`
    color: whitesmoke;
    font-size: 2rem;
    font-family: 'DeRoos';
`
const MenuBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: black;
    padding-right: 1rem;
`

const MenuItem = styled.div`
    font-size: 1.5rem;
    padding-right: 2rem;
    text-decoration: none;
    color: white;
`

function Header(props) {
    return <HeaderBox>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Title>{props.title}</Title>
            </Link>
            <MenuBox>
                <Link to='/classes' style={{textDecoration: 'none'}}>
                    <MenuItem>Classes</MenuItem>
                </Link>
                <Link to='/races' style={{textDecoration: 'none'}}>
                    <MenuItem>Races</MenuItem>
                </Link>
            </MenuBox>
        </HeaderBox>
};

export default Header;