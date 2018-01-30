import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>Medi-Portal</H1>
      </div>
    );
  }
}

export default Header;
