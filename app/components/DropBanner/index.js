import React from 'react'
import styled from 'styled-components'

import DropImageSource from './drop.svg'

class DropBanner extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return <div className={ this.props.className }>
      <img src={ DropImageSource } />
      <div>
        <span>Drag & Drop here</span>
      </div>
    </div>
  }
}

export default styled(DropBanner)`
  fill: #7cb3df;
  margin: auto;

  & > img {
    display: block;
    margin: auto;
    width: 35px;
    height: 35px;
  }

  & > div {
    text-align: center;
    margin-top: -5px;
  }

  & > div > span {
    color: #7cb3df;
    font: 10px Roboto;
  }
`
