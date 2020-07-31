import * as React from 'react';
import { Button } from './Button';
import * as renderer from 'react-test-renderer';
import '@types/jest';

it('Button default', () => {
  const tree = renderer.create(<Button content="Default Button" />).toJSON();
  expect(tree).toMatchSnapshot();
});
