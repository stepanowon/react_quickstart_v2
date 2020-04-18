import React from 'react';
import Clock from './Clock';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367072);
it('renders correctly', () => {
  const tree = renderer.create(
    <Clock />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
