import React from 'react';
import { mount } from '@cypress/react';
import Game from './index';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders learn react link', () => {
    mount(
        <Router>
            <Game />
        </Router>
    );
    cy.get('div').contains('Welcome');
    cy.get('button').contains('new game', { matchCase: false });
    cy.get('button').contains('leaderboard', { matchCase: false });
});
