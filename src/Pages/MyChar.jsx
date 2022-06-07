import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import TextField from '@mui/material/TextField';

const Grid = styled.form`
    display: grid;
    width: 50%;
    grid-template-columns: 2fr 1fr;
    gap: 1em;
`

function MyChar() {
    const [state, setState] = useState({
        name: '',
        age: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return <>
        <Title>Enter your character information</Title>
        <Grid>
            <TextField id="charName" 
                label="Name" 
                variant="outlined" 
                type="text"  
                value={state.name}
                name="name"
                onChange={handleChange} />
            <TextField id="charAge" 
                label="Age" 
                variant="outlined" 
                type="text" 
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} 
                value={state.age}
                name="age"
                onChange={handleChange} />
        </Grid>
    </>
}

export default MyChar;