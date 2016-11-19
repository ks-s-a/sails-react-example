/*
 *
 * Gallery
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectGallery from './selectors';
import styled from 'styled-components';

import { onTabIndexChange, onFileDrop, onEditSwitch, onPhotoRemove } from './actions'

import ColorBlock from '../../components/ColorBlock'
import Dropper from '../../components/Dropper'
import EditSwitcher from '../../components/EditSwitcher'
import GalleryContent from '../../components/GalleryContent'
import Tab from '../../components/Tab'
import TabList from '../../components/TabList'

export class Gallery extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('hello!')

    console.log('this.props', this.props);
    const { className, tabs, isEdit, onTabIndexChange, onFileDrop, onEditSwitch, onPhotoRemove } = this.props
    const activeTab = tabs.find((tab) => tab.isActive)
    const activeTabIndex = tabs.findIndex((tab) => tab.isActive)

    return (
      <div className={ className } >
        <Helmet
          title="Gallery"
          meta={[
            { name: 'description', content: 'Description of Gallery' },
          ]}
        />

        <ColorBlock />

        <EditSwitcher onSwitch={ onEditSwitch } />

        <TabList tabList={ tabs } onClick={ onTabIndexChange } />

        <GalleryContent images={ activeTab.files } editable={ isEdit } onRemove={ onPhotoRemove.bind(this, activeTabIndex) } >
          { isEdit && <Dropper onFileDrop={ onFileDrop } /> }
        </GalleryContent>


        <ColorBlock reverse />
      </div>
    );
  }
}

Gallery = styled(Gallery)`
  padding: 10%;
  margin: auto;

`

const mapStateToProps = selectGallery();

function mapDispatchToProps(dispatch) {
  return {
    onTabIndexChange: (index) => dispatch(onTabIndexChange(index)),
    onFileDrop: (file) => dispatch(onFileDrop(file)),
    onEditSwitch: () => dispatch(onEditSwitch()),
    onPhotoRemove: (tabIndex, photoIndex) => dispatch(onPhotoRemove(tabIndex, photoIndex))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
