import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../Components/Navbar.js';

it('Builds the snapchot of the navbar component safely', () => {
  const three = renderer
    .create(
      <Router>
        <NavBar />
      </Router>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
