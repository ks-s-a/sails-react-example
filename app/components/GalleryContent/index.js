import React from 'react';
import styled from 'styled-components'
import Lightbox from 'react-images'

import Fotorama from '../Fotorama'
import Image from '../Image'

class GalleryContent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      images: this.props.images.slice(),
      isLightboxOpen: false,
    }
  }  


  onImageClick(imageIndex) {
    console.log('click!')
    this.setState({
      isLightboxOpen: true,
      currentImage: imageIndex,
    })
  }

  onLightboxClose() {
    this.setState({ isLightboxOpen: false })
  }

  gotoNext() {
    this.setState({ currentImage: ++this.state.currentImage })
  }

  gotoPrevious() {
    this.setState({ currentImage: --this.state.currentImage })
  }

  getImages() {
    return this.props.images.map((image, i) => <Image
      key={ i }
      index={ i }
      file={ image }
      removable={ this.props.editable }
      onRemove={ this.props.onRemove }
      onImageClick={ this.onImageClick.bind(this, i) } />)
  }

  render() {
    const hasFiles = this.props.images && this.props.images.length

    return <div className={ this.props.className }>
      <Lightbox 
        currentImage={ this.state.currentImage }
        images={ this.props.images.map((image) => ({ src: image })) }
        isOpen={ this.state.isLightboxOpen }
        onClose={ this.onLightboxClose.bind(this) }
        onClickNext={ this.gotoNext.bind(this) }
        onClickPrev={ this.gotoPrevious.bind(this) }
      />
      <Fotorama>
        { hasFiles ? this.getImages() : null }
      </Fotorama>
      { this.props.children }
    </div>
  }

}

export default styled(GalleryContent)`
  padding: 15px;
  min-height: 110px;
  background-color: #fff;
  box-shadow: 0 0 5px #888;
`
