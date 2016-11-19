import React from 'react'
import styled from 'styled-components';

import DropField from '../DropField'
import DropBanner from '../DropBanner'

class Dropper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleFileDrop(files, event) {
    const reader = new FileReader();
    const filesArr = Array.from(files)

    reader.onload = (e) => {
      this.props.onFileDrop(e.target.result)
      if (filesArr.length)
        reader.readAsDataURL(filesArr.shift())
    }
    
    reader.readAsDataURL(filesArr.shift())
  }

  render() {
    return <div className={ this.props.className } >
      <DropBanner />
      <DropField onDrop={ this.handleFileDrop.bind(this) } />  
    </div>
  }

}

export default styled(Dropper)`
  margin-top: 25px;
  border: 1px solid #d4d8dc;
  width: 100%;
  height: 80px;
  background-color: #eff5f9;
  display: flex;
  align-items: center;
  position: relative;
`
