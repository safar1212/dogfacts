import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../redux/configureStore';
import HomePage from '../Components/HomePage';
// import { dogActions, getDogs } from '../Redux/mainPage';

jest.mock('axios');

describe('Details test', () => {
  it('Details render correctly', () => {
    const DetailsPage = renderer.create(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    ).toJSON();
    expect(DetailsPage).toMatchSnapshot();
  });

  test('Render Details component', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
  });

  const response = [
    {
      name: 'terrior',
      id: 0,
    },
    {
      name: 'Austrialian',
      id: 1,
    },
    {
      name: 'WesternSahara',
      id: 2,
    },
    {
      name: 'Zambian bull',
      id: 3,
    },
    {
      name: 'asian hound',
      id: 4,
    },
  ];

  test('integration testing', async () => {
    axios.get.mockResolvedValue({ data: response });

    render(
      <Provider store={store}>
        <HomePage key={response.id} coin={response} />
      </Provider>,
    );

    const userList = await waitFor(() => screen.getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });

  test(' second integration testing', () => {
    axios.get.mockResolvedValue({ data: response });

    render(
      <Provider store={store}>
        <HomePage key={response.id} coin={response} />
      </Provider>, { wrapper: Router },
    );

    const userList = (() => screen.findAllByTestId('user-item'));
    expect(userList).toHaveLength(0);
  });
});
