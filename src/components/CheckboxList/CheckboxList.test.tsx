import { render } from '@testing-library/react';

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
});
