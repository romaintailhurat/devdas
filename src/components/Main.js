require('normalize.css');
require('styles/App.css');

import React from 'react';
import LanguageSelector from './LanguageSelector';
import { languages } from '../constants/constants';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div>D E V D A S</div>
        <LanguageSelector langList={ languages } />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
