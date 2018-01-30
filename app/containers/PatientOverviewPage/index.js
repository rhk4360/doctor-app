/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import ReactTable from 'react-table';
import { createStructuredSelector } from 'reselect';
import H1 from 'components/H1';
import messages from './messages';
import { makeSelectLoading, makeSelectError, makeSelectCurrentUser } from 'containers/App/selectors';
import PatientOverview from 'components/PatientOverview';
import 'react-table/react-table.css'

export class PatientOverviewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {

    console.log('PatientOverviewPage props: ' + JSON.stringify(this.props));
    //if (this.props.params)
  }

  componentWillReceiveProps(newProps) {
    console.log('PatientOverviewPage props: ' + JSON.stringify(newProps));
    
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Helmet>
          <title>Patient Overview Page</title>
          <meta name="description" content="Patient overview page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <PatientOverview patient={currentUser} />

        <button>Request New Appointment</button>
        <ReactTable
          data={currentUser.appointments}
          columns={[
            {
              Header: "Date",
              columns: [
                {
                  Header: "Date",
                  accessor: "formatted_datetime",
                },
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Status",
                  accessor: "status",
                },
                {
                  Header: "Provider",
                  accessor: "provider_name",
                },
                {
                  Header: "Reason for visit",
                  accessor: "purpose",
                },
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

PatientOverviewPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  currentUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(PatientOverviewPage);
