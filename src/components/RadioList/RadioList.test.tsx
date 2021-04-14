import { render } from '@testing-library/react';

import RadioList from './RadioList';

describe('test', () => {
  const list = {
    title: 'Checkbox List Heading',
    items: [
      { label: 'Default' },
      { label: 'Checked', checked: true },
      { label: 'Disabled', disabled: true },
      { label: 'Checked & Disabled', disabled: true, checked: true },
    ],
  };

  it('Renders RadioList Components', () => {
    render(<RadioList list={list}>test</RadioList>);
  });
});
