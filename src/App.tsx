import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import NewGame from './components/NewGame';
import reportWebVitals from './reportWebVitals';
import { ROUTES } from './routes'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, AuthContext } from './firebase'
import { User } from 'firebase/auth'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
export function App() {
    const [user, loading, error] = useAuthState(auth);


    return <React.StrictMode>
        <AuthContext.Provider value={{ user, error }}>
            <Router>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Game />} />
                    <Route path={ROUTES.NEW_GAME} element={<NewGame />} />
                    <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    </React.StrictMode>
}