import React from 'react';
import styled from 'styled-components';

class Fotorama extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return <div className={ this.props.className } >
      { this.props.children }
    </div>
  }

}

export default styled(Fotorama)`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`