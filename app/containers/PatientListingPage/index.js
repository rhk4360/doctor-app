/*
 * PatientListingPage
 *
 * First page providers will see after logging in, at the '/listing' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ReactTable from 'react-table';
import { push } from 'react-router-redux';
import 'react-table/react-table.css';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { getPatientsList } from './actions';
import { makeSelectPatientList } from './selectors';
import CenteredSection from './CenteredSection';
import reducer from './reducer';
import saga from './saga';

export class PatientListingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.onRowClick = this.onRowClick.bind(this);
  }
  componentDidMount() {
    this.props.retrievePatients();
  }

  onRowClick(state, rowInfo) {
    return {
      onClick: () => {
        if (rowInfo && rowInfo.original) {
          this.props.getPatientDetail(rowInfo.original._id);
        }
      },
    };
  }

  render() {
    const { patientList } = this.props;
    if (Array.isArray(patientList)) {
      return (
        <article>
          <Helmet>
            <title>Patient Listing</title>
            <meta name="description" content="A Medical Portal" />
          </Helmet>
          <div>
            <CenteredSection>
              <ReactTable
                data={patientList}
                filterable
                getTrProps={this.onRowClick}
                columns={[
                  {
                    Header: 'Patient Info',
                    columns: [
                      {
                        Header: 'First Name',
                        accessor: 'name.first',
                      },
                      {
                        Header: 'Last Name',
                        accessor: 'name.last',
                      },
                      {
                        Header: 'Age',
                        accessor: 'age',
                      },
                    ],
                  },
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </CenteredSection>
          </div>
        </article>
      );
    }
    return false;
  }
}

PatientListingPage.propTypes = {
  getPatientDetail: PropTypes.func,
  patientList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  retrievePatients: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    retrievePatients: () => {
      dispatch(getPatientsList());
    },
    getPatientDetail: (patientId) => {
      if (patientId) {
        dispatch(push(`/overview/${patientId}`));
      }
    },
  };
}

const mapStateToProps = createStructuredSelector({
  patientList: makeSelectPatientList(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'list', reducer });
const withSaga = injectSaga({ key: 'list', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PatientListingPage);
