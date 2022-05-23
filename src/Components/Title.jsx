import React from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
    font-size: 24px;
    margin-bottom: 1em;
`

function Title(props) {
    return (
        <TitleText>{props.children}</TitleText>
    )
}

export default Title;