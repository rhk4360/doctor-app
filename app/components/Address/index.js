import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H2 from 'components/H2';
import { makeSelectCurrentUser } from 'containers/App/selectors';

export default class Address extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { patient } =  this.props;
    console.log("address props: " + JSON.stringify(this.props));
    if (patient && patient.address) {
      return (
        <address>
          <span>{patient.address.line_1}</span>
          <span>{patient.address.line_2}</span>
          <span>{patient.address.city}</span>
          <span>{patient.address.state}</span>
          <span>{patient.address.postal_code}</span>
        </address>
      );
    } else {
      return false;
    }
  }
}

Address.propTypes = {
  patient: React.PropTypes.object,
};

