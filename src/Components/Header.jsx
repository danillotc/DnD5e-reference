import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const HeaderBox = styled.div`
    height: 5em;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
`

const Title = styled.h1`
    color: white;
    font-size: 28px;
`

function Header(props) {
    return <HeaderBox>
            <IconButton>
                <MenuIcon fontSize="large" sx={{color: "white"}} />
            </IconButton>
            <Title>{props.title}</Title>
            <div></div>
        </HeaderBox>
};

export default Header;