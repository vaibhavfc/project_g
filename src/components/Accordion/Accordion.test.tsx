import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import React from 'react';

import Accordion from './Accordion';

beforeEach(cleanup);

describe('Accordion', () => {
  const item = [
    {
      title: 'Header-1',
      description: 'note : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
    {
      title: 'Header-4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl, nunc consequat eu blandit lacus facilisis natoque ullamcorper. Sapien arcu eleifend cras in.',
    },
  ];
  it('Renders Default Accordion with correct header', () => {
    render(<Accordion items={item} />);
    expect(screen.getByText(item[0].title)).toBeVisible();
  });
  it('Renders correct onclick behaviour', () => {
    render(<Accordion items={item} />);
    const AccordionItem = screen.getByText(item[0].title);
    expect(screen.getByText(item[0].description)).not.toBeVisible();
    fireEvent.click(AccordionItem);
    expect(screen.getByText(item[0].description)).toBeVisible();
  });
});
