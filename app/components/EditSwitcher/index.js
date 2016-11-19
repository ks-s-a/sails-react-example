import React from 'react';
import styled from 'styled-components';

export class EditSwitcher extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return <div className={ this.props.className } >
      <label>
        <input type="checkbox" onChange={ this.props.onSwitch } />
        Allow editing
      </label>
    </div>
  }

}

export default styled(EditSwitcher)`
  margin: 50px;

  & input {
    margin-right: 10px;
  }
`