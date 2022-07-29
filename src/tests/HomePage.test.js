import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePage from '../Components/HomePage';


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
});