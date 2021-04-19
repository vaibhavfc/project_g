// import { render, screen, cleanup } from '@testing-library/react';
// import React from 'react';

// import Chip from './Chip';

// beforeEach(cleanup);

// describe('Chip', () => {
//   it('Renders Default Nudge', () => {
//     render(<Chip type="default" chipType="status" label="Label" />);
//     expect(screen.getByTestId('chip-status-default').classList.contains('MuiChip-root')).toBe(true);
//   });

//   it('Renders Default Chip', () => {
//     render(<Chip type="default" chipType="nudge" label="Label" />);
//     expect(screen.getByTestId('chip-nudge-default').classList.contains('MuiChip-sizeSmall')).toBe(true);
//   });

//   it('Success Status', () => {
//     render(<Chip type="success" chipType="status" label="Label" />);
//     expect(screen.getByTestId('chip-status-success').classList.contains('MuiChip-root')).toBe(true);
//   });

//   it('Pending Nudge', () => {
//     render(<Chip type="pending" chipType="nudge" label="Label" />);
//     expect(screen.getByTestId('chip-nudge-pending').classList.contains('MuiChip-sizeSmall')).toBe(true);
//   });
//   it('Warning Status', () => {
//     render(<Chip type="warning" chipType="status" label="Label" />);
//     expect(screen.getByTestId('chip-status-warning').classList.contains('MuiChip-root')).toBe(true);
//   });

//   it('Info Nudge', () => {
//     render(<Chip type="info" chipType="nudge" label="Label" />);
//     expect(screen.getByTestId('chip-nudge-info').classList.contains('MuiChip-sizeSmall')).toBe(true);
//   });

//   it('Renders correct laber', () => {
//     render(<Chip label="Label" />);
//     expect(screen.getByText('Label')).toBeVisible();
//   });
// });
