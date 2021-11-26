import React from 'react';
import SignIn from './Signin';
import { AuthContext, db, login, logout, registerUser } from '../../firebase'
import SignUp from './SignUp';
import { Button, Snackbar } from '@mui/material';

import { collection, addDoc } from "firebase/firestore";
interface IGameOverProps {
    currentScore: number;
}

export function GameOver({ currentScore }: IGameOverProps) {
    const [message, setMessage] = React.useState<string>();

    return <div>
        <p>Your score: {currentScore}</p>
        <p>Signin to store it forever!</p>
        <AuthContext.Consumer>{({ user, error }) => {

            if (!user) {
                return (<>
                    {error?.message}
                    <SignIn onSubmit={(email, password) => {
                        login(email, password);

                    }} />
                    <SignUp onSubmit={(email, password) => {
                        registerUser(email, password);

                    }} />


                </>)
            } else {
                return <>
                    {user?.email}
                    <Button onClick={() => {
                        logout()
                    }} >Logout</Button>
                    <Button onClick={() => {
                        addDoc(collection(db, "scores"), {
                            user: user.email,
                            score: currentScore
                        }).then((docRef) => {
                            setMessage('saved')
                            setTimeout(() => {
                                setMessage(undefined)
                            }, 2000)
                        });
                    }}>Save Score</Button>

                    {message ? <Snackbar open={!!message}

                        message={message} onClose={() => setMessage(undefined)} /> : null}
                </>
            }
        }}
        </AuthContext.Consumer>

    </div>
}