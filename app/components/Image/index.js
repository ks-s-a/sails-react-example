import React from 'react';
import styled from 'styled-components';

import removeButton from './cancel-button.svg'

class Image extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onRemoveButtonClick() {
    this.props.onRemove(this.props.index)
  }

  render() {
    return <div className={ this.props.className }>
      <img
        className="photo"
        src={ this.props.file }
        onClick={ this.props.onImageClick }
      />

      { this.props.removable ?
        <img
          className="cancel-button"
          onClick={ this.onRemoveButtonClick.bind(this) }
          src={ removeButton } /> : null
      }
    </div>
  }

}

export default styled(Image)`
  display: inline-block;
  position: relative;

  & > .photo {
    height: 120px;
    width: 220px;
    margin: 7px;
  }

  & > .cancel-button {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 18px;
    right: 18px;
    opacity: .5;
  }
`
