import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Title from '../Components/Title';
import RaceCard from '../Components/RaceCard';

const BoxContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function Races() {
    const [racesList, setRacesList] = useState([]);
    const [selectedRace, setSelectedRace] = useState('');

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/races')
            .then(res => res.json())
            .then((result => {
                setRacesList(result.results);
                }),
                (error) => console.warn('Error: ', error)
            )
    }, []);

    const handleChange = (event) => {
        setSelectedRace(event.target.value);
    };

    const racesListOptions = racesList.map(item => (
        <MenuItem key={item.index} value={item.name}>{item.name}</MenuItem>
    ))

    const racesComponent = () => {
        if(racesList.length > 0) {
            return (
                <>
                    <Title>Select a character race</Title>
                    <FormControl sx={{minWidth: 120, marginBottom: 5}}>
                        <InputLabel>Races</InputLabel>
                        <Select
                            value={selectedRace}
                            label="Race"
                            onChange={handleChange}>
                            {racesListOptions}
                        </Select>
                    </FormControl>
                    <BoxContent>
                        { selectedRace ? <RaceCard raceName={selectedRace} /> : '' }
                    </BoxContent>
                </>
            )
        } else {
            return (<CircularProgress sx={{color: 'black'}} />)
        }
    }

    return racesComponent();
}

export default Races;