import * as React from 'react';
import { ContextualMenu } from '..';
import * as renderer from 'react-test-renderer';
import '@types/jest';

it('ContextualMenu default props', () => {
  const tree = renderer.create(<ContextualMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
