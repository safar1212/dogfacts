import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Details from '../Components/Details';

describe('Details test', () => {
  it('Details render correctly', () => {
    const DetailsPage = renderer.create(
      <Provider store={store}>
        <Details />
      </Provider>,
    ).toJSON();
    expect(DetailsPage).toMatchSnapshot();
  });

  test('Render Details component', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
  });
});
