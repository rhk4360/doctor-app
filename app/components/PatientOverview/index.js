import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H2 from 'components/H2';
import Address from 'components/Address';

class PatientOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { user } =  this.props;

    if (user) {
      return (
        <div>
          <H2>
            <FormattedMessage {...messages.mainHeader} />
          </H2>
          <ul>
            <li>{ user.name.full }</li>
            <li>{ user.age }</li>
            <li>{ user.email }</li>
            <li><Address /></li>
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

const mapStateToProps = (state) => { 
  console.log(JSON.stringify(state.get('home')));
  return { user: state.get('home').get('user') };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(PatientOverview);