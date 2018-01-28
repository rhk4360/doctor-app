import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H2 from 'components/H2';

class PatientOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { user } =  this.props;

    if (user.address) {
      return (
        <address>
          <span>{user.address.line_1}</span>
          <span>{user.address.line_2}</span>
          <span>{user.address.city}</span>
          <span>{user.address.state}</span>
          <span>{user.address.postal_code}</span>
        </address>
      );
    } else {
      return false;
    }
  }
}

PatientOverview.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = (state) => { 
  console.log(JSON.stringify(state.get('home')));
  return { user: state.get('home').get('user') };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(PatientOverview);
