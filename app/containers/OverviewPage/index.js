/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError, makeSelectCurrentUser } from 'containers/App/selectors';
import Button from 'components/Button';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import PatientOverview from 'components/PatientOverview';

export class OverviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { currentUser } = this.props;

    if (currentUser.type === 'Patient') {

    } else {

    }
  }
  render() {
    const { loading, error, currentUser } = this.props;

    return (
      <article>
        <Helmet>
          <title>Patient Overview</title>
          <meta name="description" content="A Medical Portal" />
        </Helmet>
        <div>
          <CenteredSection>
            <PatientOverview patient={currentUser} />
          </CenteredSection>
          <Section>
               
          </Section>
        </div>
      </article>
    );
  }
}

OverviewPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps() {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentUser: makeSelectCurrentUser,
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'overview', reducer });
const withSaga = injectSaga({ key: 'overview', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OverviewPage);
