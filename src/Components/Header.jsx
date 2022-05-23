import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Title = styled.h1`
    color: white;
    font-size: 28px;
`

function Header(props) {
    return <HeaderBox>
            <Title>{props.title}</Title>
        </HeaderBox>
};

export default Header;