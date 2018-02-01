/**
 * Test the HomePage
 */

import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { PatientListingPage, mapDispatchToProps } from '../index';
import { getPatientsList, retrievePatients } from '../actions';

describe('<PatientListingPage />', () => {
  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <PatientListingPage
          retrievePatients={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <PatientListingPage
          retrievePatients={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('retrievePatients', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.retrievePatients).toBeDefined();
      });

      it('should dispatch retrievePatients when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.retrievePatients();
        expect(dispatch).toHaveBeenCalledWith(retrievePatients());
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch getPatientsList when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.retrievePatients();
        expect(dispatch).toHaveBeenCalledWith(getPatientsList());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
