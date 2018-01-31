import React from 'react';
import { PropTypes } from 'prop-types';
import Span from './Span';

export default class Address extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { patient } = this.props;
    if (patient && patient.address) {
      return (
        <address>
          <div>
            <span>{patient.address.phone}</span>
          </div>
          <div>
            <span>{patient.address.line_1}</span>
            <Span>{patient.address.line_2}</Span>
          </div>
          <span>{patient.address.city},</span>
          <Span>{patient.address.state}</Span>
          <Span>{patient.address.postal_code}</Span>
        </address>
      );
    }
    return (
      <Span>No address on file</Span>
    );
  }
}

Address.propTypes = {
  patient: PropTypes.object,
};

