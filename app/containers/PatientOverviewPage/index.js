/*
 * PatientOverviewPage
 *
 * Overview of a patient
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import ReactTable from 'react-table';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from 'components/H1';
import Button from 'components/Button';
import messages from './messages';
import { makeSelectLoading, makeSelectError, makeSelectCurrentUser } from 'containers/App/selectors';
import { getPatientOverview, cancelAppointment, declineAppointment } from './actions';
import { makeSelectPatient, makeSelectAppointments } from './selectors';
import reducer from './reducer';
import saga from './saga';
import PatientOverview from 'components/PatientOverview';
import 'react-table/react-table.css'

export class PatientOverviewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.match && this.props.match) {
      const { id } = this.props.match.params;
      // fetch this user's details
      this.props.retrievePatientOverview(id);
    }
  }

  render() {
    const { patient, appointments, currentUser } = this.props;
    if (patient) {

      // render action buttons for appointment rows based on 
      // the type of user that is logged in Provider vs. Patient
      let cellButtonRender = row => (
        row.original.status === 'Booked' &&
                   moment().isBefore(row.original.datetime) ?
        <Button onClick={this.props.cancelAppointment(row.original)}>
          Cancel
        </Button>
        : false
      );

      if (currentUser.type === 'Provider') {
        cellButtonRender = row => (
          row.original.status === 'Requested' ?
          <div>
            <Button>
              Decline
            </Button>
            <label for="reason">Decline Reason
              <input type="text" />
            </label>
          </div>
          : false
        );
      }
      return (
        <div>
          <Helmet>
            <title>Patient Overview Page</title>
            <meta name="description" content="Patient overview page" />
          </Helmet>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <PatientOverview patient={patient} />

          <Button>Create New Appointment</Button>
          <ReactTable
            data={appointments}
            filterable
            columns={[
              {
                Header: "Appointments",
                columns: [
                  {
                    Header: "Date",
                    accessor: "formatted_datetime",
                  },
                  {
                    Header: "Status",
                    accessor: "status",
                  },
                  {
                    Header: "Provider",
                    accessor: "provider.name.full",
                  },
                  {
                    Header: "Reason for visit",
                    accessor: "purpose",
                  },
                  {
                    Header: 'Action',
                    id: 'button',
                    accessor: 'status',
                    filterable: false,
                    Cell: cellButtonRender,
                  },
                ]
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      );
    } else {
      return false;
    }
  }
}

PatientOverviewPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    retrievePatientOverview: (id) => {
      dispatch(getPatientOverview(id));
    },
    cancelAppointment: (appointmentToUpdate) => {
      dispatch(cancelAppointment(appointmentToUpdate));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  patient: makeSelectPatient(),
  appointments: makeSelectAppointments(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'overview', reducer });
const withSaga = injectSaga({ key: 'overview', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PatientOverviewPage);
