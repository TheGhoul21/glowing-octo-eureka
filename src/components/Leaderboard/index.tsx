import React from 'react';
import { Card, Typography, CardContent, Button } from '@mui/material'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../routes';

export default function LeaderBoard() {
    const navigate = useNavigate();
    return <div>
        <Card className="content">
            <CardContent>
                <Typography className="title" gutterBottom variant="h1" component="div">
                    Leaderboard
                </Typography>
            </CardContent>
            <Button onClick={() => {
                navigate(ROUTES.HOME);
            }} >Home</Button>
        </Card>
    </div>
}