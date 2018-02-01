import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from '../messages';
import PatientOverviewPage from '../index';

describe('<PatientOverviewPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <PatientOverviewPage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <PatientOverviewPage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
