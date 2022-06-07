import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Text = styled.p`
    font-size: 1.5em;
`

function ClassCard(props) {
    const [classesProps, setClassesProps] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.dnd5eapi.co/api/classes/${props.selectedClass.toLowerCase()}`)
            .then(res => res.json())
            .then((result => {
                setClassesProps(result);
                setLoading(false);
            }),
                (error) => console.log('Error: ', error)
            )
    }, [props.selectedClass]);

    return <>
        {loading ? <CircularProgress sx={{color: 'black', marginTop: 2}} />
            : <Text>Hit die: {classesProps.hit_die}</Text>
        }
    </>
}

export default ClassCard;