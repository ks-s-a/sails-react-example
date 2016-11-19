/*
 *
 * Gallery reducer
 *
 */

import { fromJS } from 'immutable';
import { getTestImages } from './mock'
import {
  SET_ACTIVE_TAB,
  ADD_FILE,
  EDIT_SWITCH,
  PHOTO_REMOVE
} from './constants';

const images = getTestImages()
const initialState = fromJS({
  isEdit: false,
  tabs: [{
    title: 'First',
    isActive: false,
    files: images.slice(0, 3),
  }, {
    title: 'Second',
    isActive: true,
    files: images.slice(3, 4),
  }, {
    title: 'Third',
    isActive: false,
    files: images.slice(4),
  }],
});

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILE:
      const fileTabs = state.get('tabs').toJS().map((tab, i) => {
        if (tab.isActive)
          tab.files.push(action.file)
        return tab
      })

      return state.set('tabs', fromJS(fileTabs))
    case SET_ACTIVE_TAB:
      const tabs = state.get('tabs').toJS().map((tab, i) => {
        tab.isActive = i === action.index
        return tab
      })

      return state.set('tabs', fromJS(tabs))
    case EDIT_SWITCH:
      return state.set('isEdit', !state.get('isEdit'))
    case PHOTO_REMOVE:
      const newFiles = state
        .get('tabs')
        .get(action.tabIndex)
        .get('files')
        .toJS()
        .filter((_, index) => index !== action.photoIndex)

      return state.setIn(['tabs', action.tabIndex, 'files'], fromJS(newFiles))
    default:
      return state;
  }
}

export default galleryReducer;
