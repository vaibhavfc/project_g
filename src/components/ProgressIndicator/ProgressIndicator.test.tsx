import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ProgressIndicator from './ProgressIndicator';

describe('ProgressIndicator', () => {
  it('Renders ProgressIndicator Compoents', () => {
    render(<ProgressIndicator progressIndicatorType="step" ProgressIndicatorType="status" value={25}/>);
  });

  it('Matches Snapshot of ProgressIndicator', () => {
    const tree = renderer.create(<ProgressIndicator progressIndicatorType="step" ProgressIndicatorType="status" value={25}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
