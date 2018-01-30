import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Address from 'components/Address';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import Span from './Span';

class PatientOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { currentUser } =  this.props;
    console.log('patientoverview: ' + JSON.stringify(this.props));
    if (currentUser) {
      return (
        <div>
          <ul>
            <li>
              <strong><FormattedMessage {...messages.nameLabel} /></strong>
              <Span>{ currentUser.name.full }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.ageLabel} /></strong>
              <Span>{ currentUser.age }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.emailLabel} /></strong>
              <Span>{ currentUser.email }</Span>
            </li>
            <li>
              <strong><FormattedMessage {...messages.addressLabel} /></strong>
              <Address patient={currentUser} />
            </li>
          </ul>
        </div>
      );
    } else {
      return false;
    }
  }
}

PatientOverview.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(PatientOverview);
