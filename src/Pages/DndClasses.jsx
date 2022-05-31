import React, { useState, useEffect } from 'react';
import ClassCard from '../Components/ClassCard';
import styled from 'styled-components';
import Title from '../Components/Title';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BoxContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function DndClasses() {
    const [classesList, setClassesList] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/classes')
            .then(res => res.json())
            .then(result => {
                setClassesList(result.results);
            }, 
            (error) => {
                console.warn('Erro: ', error)
            })
    }, [])

    const handleChange = (event) => {
        setSelectedClass(event.target.value);
    }

    const classesListOptions = classesList.map(item => (
        <MenuItem key={item.index} value={item.name}>{item.name}</MenuItem>
    ))

    return <>
        <Title>Select a character class</Title>
        <FormControl sx={{minWidth: 140, marginBottom: 5}}>
            <InputLabel>Classes</InputLabel>
            <Select
                value={selectedClass}
                label="Class"
                onChange={handleChange}>
                {classesListOptions}
            </Select>
            <BoxContent>
                <ClassCard selectedClass={selectedClass}></ClassCard>
            </BoxContent>
        </FormControl>
    </>
}

export default DndClasses;