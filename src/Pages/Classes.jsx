import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Title from '../Components/Title'

function Classes() {
    const [classList, setclassList] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/classes')
            .then(res => res.json())
            .then((result => {
                setclassList(result.results);
                }),
                (error) => console.log('Error: ', error)
            )
    }, []);

    const handleChange = (event) => {
        setSelectedClass(event.target.value);
    };

    return (
        <>
            {classList.length
            ? 
            <>
                <Title>Selecione uma classe</Title>
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel>Classe</InputLabel>
                    <Select
                        value={selectedClass}
                        label="Classe"
                        onChange={handleChange}
                    >
                        {classList.map(item => (
                            <MenuItem key={item.index} value={item.name}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
            :
                <CircularProgress sx={{color: 'black'}} />
            }
        </>
    )
}

export default Classes;