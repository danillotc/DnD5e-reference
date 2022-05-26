import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CardTitle = styled.h1`
    font-size: 42px;
    font-family: 'DeRoos';
    text-align: center;
`;

function RaceCard(props) {
    const [raceProps, setRaceProps] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.dnd5eapi.co/api/races/${props.raceName.toLowerCase()}`)
            .then(res => res.json())
            .then((result => {
                setRaceProps(result);
                setLoading(false);
            }),
                (error) => console.log('Error: ', error)
            )
    }, [props.raceName]);

    return <>
            <Card variant="outlined" sx={{width: '50%' }}>
                <CardContent sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minHeight: 200
                }}>
                    {
                        loading ? <CircularProgress sx={{color: 'black'}} />
                        :
                        <>
                            <CardTitle>{props.raceName}</CardTitle>
                            <p>{raceProps?.alignment}</p>
                        </>
                    }
                </CardContent>
            </Card>
        </>
}

export default RaceCard;