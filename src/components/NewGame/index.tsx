import React from 'react';
import { Card, Typography, CardContent, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../routes';
import useAxios from 'axios-hooks';
import { URL } from '../../config';

export default function NewGame() {
    const navigate = useNavigate();


    const [currentStep, setCurrentStep] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [{ error, data, loading }] = useAxios(URL);




    return <div>
        <Card className="content">
            <CardContent>
                <Typography className="title" gutterBottom variant="h1" component="div">
                    NewGame
                </Typography>

                {!data ? <CircularProgress color="secondary" /> : null}

                {data && currentStep === 0 ? <h1>Intro</h1> : null}
                {data && currentStep > 0 ? <h1>Question #{currentQuestion + 1}</h1> : null}
            </CardContent>
            <Button onClick={() => {
                navigate(ROUTES.HOME);
            }} >Home</Button>
        </Card>
    </div>
}