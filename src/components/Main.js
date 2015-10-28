require('normalize.css');
require('styles/App.css');

import React from 'react';
import LanguageSelector from './LanguageSelector';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div>D E V D A S</div>
        <LanguageSelector langList={ ['Javascript', 'Clojure'] } />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
