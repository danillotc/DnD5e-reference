import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import TextField from '@mui/material/TextField';

const Grid = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1em;
    
    @media screen and (min-width: 600px) {
        width: 50%;
    }
`

function MyChar() {
    const [state, setState] = useState({
        name: { value: '', valid: true },
        age: { value: '', valid: true },
        background: { value: '', valid: true },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let validation = true;
        
        validation = name === 'name' && value === '' ? false : true;

        setState(prevState => ({
            ...prevState,
            [name]: {value: value, valid: validation}
        }));
    };

    return <>
        <Title>Enter your character information</Title>
        <Grid autoComplete='off'>
            <TextField id="charName" 
                label="Name" 
                variant="outlined" 
                type="text"  
                value={state.name.value}
                name="name"
                required
                error={!state.name.valid}
                helperText={state.name.valid ? '' : 'Campo obrigatório'}
                onChange={handleChange} />
            <TextField id="charAge" 
                label="Age" 
                variant="outlined" 
                type="text" 
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} 
                value={state.age.value}
                name="age"
                onChange={handleChange} />
            <TextField id="charBackground"
                style={{gridColumn: "span 2"}}
                label="Background"
                variant="outlined"
                type="text"
                multiline
                rows={6}
                value={state.background.value}
                name="background"
                onChange={handleChange}
            />
        </Grid>
    </>
}

export default MyChar;