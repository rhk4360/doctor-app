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
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Button from 'components/Button';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, changePassword, signIn } from './actions';
import { makeSelectUsername, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Medical Portal Page</title>
          <meta name="description" content="A Medical Portal" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.signInHeader} />
            </H2>
          </CenteredSection>
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.usernameLabel} />                
                <Input
                  id="username"
                  type="text"
                  placeholder="patient1 or doctor1"                  
                  onChange={this.props.onChangeUsername}
                />
              </label>
              <label htmlFor="password">
                <FormattedMessage {...messages.passwordLabel} />                
                <Input
                  id="password"
                  type="password"                 
                  placeholder="test1234"                  
                  onChange={this.props.onChangePassword}
                />
              </label>
              <Button type="submit" onClick={this.props.onSubmitForm} primary >
                <FormattedMessage {...messages.signInButton} />
              </Button>
            </Form>            
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signIn());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
