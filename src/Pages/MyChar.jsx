import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

const Grid = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1em;
    margin-bottom: 1em;
    
    @media screen and (min-width: 600px) {
        width: 50%;
    }
`

function MyChar() {
    const [state, setState] = useState({
        name: { value: '', valid: true },
        age: { value: '', valid: true },
        bio: { value: '', valid: true },
    });
    const [validForm, setValidForm] = useState(false);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current) {
            setValidForm(!Object.entries(state).some(prop => prop[1].valid === false));
        } else {
            isMounted.current = true;
        }
    }, [state])

    const handleChange = (event) => {
        const { name, value } = event.target;
        let validation = true;
        
        validation = name === 'name' && value === '' ? false : true;

        setState(prevState => ({
            ...prevState,
            [name]: {value: value, valid: validation}
        }));
    };

    const handleSubmit = () => {
        localStorage.setItem('dndCharName', state.name.value);
        localStorage.setItem('dndCharAge', state.age.value);
        localStorage.setItem('dndCharBio', state.bio.value);
        setShowSnackBar(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSnackBar(false);
    }

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
            <TextField id="charBio"
                style={{gridColumn: "span 2"}}
                label="Biography"
                variant="outlined"
                type="text"
                multiline
                rows={6}
                value={state.bio.value}
                name="bio"
                onChange={handleChange}
            />
            <Button 
                variant="contained"
                style={{gridColumn: 'span 2', maxWidth: '15em', justifySelf: 'center'}}
                disabled={!validForm}
                onClick={handleSubmit}
            >Save character info</Button>
        </Grid>
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={showSnackBar}
            onClose={handleClose}
            autoHideDuration={2000}
            message="Character data saved in your browser!"
        />
    </>
}

export default MyChar;