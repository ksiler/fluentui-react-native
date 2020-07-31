import * as React from 'react';
import { Callout } from '..';
import * as renderer from 'react-test-renderer';
import '@types/jest';

it('Callout default props', () => {
  const tree = renderer.create(<Callout />).toJSON();
  expect(tree).toMatchSnapshot();
});
