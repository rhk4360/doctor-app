import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Address from 'components/Address';
import messages from './messages';
import Span from './Span';

export default class PatientOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { patient } = this.props;
    if (patient) {
      return (
        <div>
          <ul>
            <li>
              <strong><FormattedMessage {...messages.nameLabel} /></strong>
              <Span>{ patient.name.full }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.ageLabel} /></strong>
              <Span>{ patient.age }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.emailLabel} /></strong>
              <Span>{ patient.email }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.addressLabel} /></strong>
              <Address patient={patient} />
            </li>
          </ul>
        </div>
      );
    }
    return false;
  }
}

PatientOverview.propTypes = {
  patient: PropTypes.object,
};
