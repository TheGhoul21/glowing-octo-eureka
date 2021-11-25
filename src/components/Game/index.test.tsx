import React from 'react';
import { mount } from '@cypress/react';
import Game from './index';

it('renders learn react link', () => {
    mount(<Game />);
    cy.get('a').contains('Learn React');
});
