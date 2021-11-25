import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
export default function Game() {

    const navigate = useNavigate()
    return <div>
        <Card className="content">
            <CardContent>
                <Typography className="title" gutterBottom variant="h1" component="div">
                    Welcome
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Answer to the following 10 questions and see your score
                </Typography>

            </CardContent>
            <Button onClick={() => {
                navigate(ROUTES.NEW_GAME);
            }} variant="contained" size="small">New Game</Button>
            <Button onClick={() => {
                navigate(ROUTES.LEADERBOARD);
            }} size="small">Leaderboard</Button>
        </Card>
    </div>
}