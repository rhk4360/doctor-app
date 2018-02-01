import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Address from 'components/Address';
import messages from './messages';
import Ul from './Ul';
import Span from './Span';

export default class PatientOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { patient } = this.props;
    if (patient) {
      return (
        <div>
          <Ul>
            <li>
              <strong><FormattedMessage {...messages.nameLabel} /></strong>
              <Span>{ patient.name.full }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.birthdayLabel} /></strong>
              <Span>{ moment(patient.dob).format('MM/DD/YYYY') }</Span>
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
          </Ul>
        </div>
      );
    }
    return false;
  }
}

PatientOverview.propTypes = {
  patient: PropTypes.object,
};
