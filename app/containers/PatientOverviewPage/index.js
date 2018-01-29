/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import PatientOverview from 'components/PatientOverview';

export default class PatientOverviewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Helmet>
          <title>Patient Overview Page</title>
          <meta name="description" content="Patient overview page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <PatientOverview patient={this.props.user} />
      </div>
    );
  }
}
