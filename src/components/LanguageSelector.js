import React, {PropTypes} from 'react';

class LanguageSelector extends React.Component {

  render() {
    return(
      <div>Select a language
        <ul>
          { this.props.langList.map((lang) => <li>{ lang }</li>) }
        </ul>
      </div>
    );
  }

}

LanguageSelector.propTypes = {
  langList: PropTypes.array.isRequired
}

export default LanguageSelector;
