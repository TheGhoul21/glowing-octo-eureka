import React from 'react';
import { Card, Typography, CardContent, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../routes';
import useAxios from 'axios-hooks';
import { URL } from '../../config';
import { IQuestion, SCORES } from '../../types/question';
import { Question } from '../Question/index'
import { AuthContext } from '../../firebase'
import { GameOver } from '../GameOver';



export default function NewGame() {
    const navigate = useNavigate();

    const [currentScore, setCurrentScore] = React.useState(0);
    const [currentStep, setCurrentStep] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [{ error, data, loading }] = useAxios<{ response_code: string, results: Array<IQuestion> }, {}, {}>(URL);


    React.useEffect(() => {

    }, [])


    return <div>
        <Card className="content">

            <AuthContext.Consumer>{value => {
                return value.user?.email
            }}</AuthContext.Consumer>
            <CardContent>
                <Typography className="title" gutterBottom variant="h1" component="div">
                    NewGame
                </Typography>
                <Typography>Current Score: {currentScore}</Typography>

                {!data ? <CircularProgress color="secondary" /> : null}

                {data && currentStep === 0 ? <>
                    <h1>Intro</h1>
                    <Button onClick={() => {
                        setCurrentStep(currentStep + 1);
                    }}>START</Button>
                </> : null}
                {currentStep <= (data?.results?.length || 0) ? currentStep : '-'} / {data?.results?.length || '-'}
                {data && currentStep > 0 && currentStep <= data.results.length ? (
                    <Question
                        onQuestionAnswer={(correct, difficulty) => {
                            if (correct) {
                                setCurrentScore(currentScore + SCORES[difficulty]);
                                setCurrentStep(currentStep + 1)
                            } else {
                                setCurrentStep(currentStep + 1)
                            }
                        }}
                        question={data.results[currentStep - 1]} />) : null}

                {data && currentStep > 0 && currentStep > data.results.length ? <GameOver currentScore={currentScore} /> : null}
            </CardContent>
            <Button onClick={() => {
                navigate(ROUTES.HOME);
            }} >Home</Button>
        </Card>
    </div>
}