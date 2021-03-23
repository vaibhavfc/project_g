import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import CheckboxList from './CheckboxList';

const list = {
  title: 'Checkbox List Heading',
  items: [
    { label: 'Default' },
    { label: 'Checked', checked: true },
    { label: 'Disabled', disabled: true },
    { label: 'Checked & Disabled', disabled: true, checked: true },
  ],
};
describe('test', () => {
  it('Renders CheckboxList Compoents', () => {
    render(<CheckboxList list={list} />);
  });

  it('Matches Snapshot of Checklist', () => {
    const tree = renderer.create(<CheckboxList list={list} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
