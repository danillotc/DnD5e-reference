import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
    height: 5em;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Title = styled.h1`
    color: whitesmoke;
    font-size: 2rem;
    font-family: 'DeRoos';
`

function Header(props) {
    return <HeaderBox>
            <Title>{props.title}</Title>
        </HeaderBox>
};

export default Header;