/*
 *
 * Gallery actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_ACTIVE_TAB,
  ADD_FILE,
  EDIT_SWITCH,
  PHOTO_REMOVE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function onTabIndexChange(index) {
  return {
    type: SET_ACTIVE_TAB,
    index,
  }
}

export function onFileDrop(file) {
  return {
    type: ADD_FILE,
    file,
  }
}

export function onEditSwitch() {
  return {
    type: EDIT_SWITCH
  }
}

export function onPhotoRemove(tabIndex, photoIndex) {
  console.log('remove!', tabIndex,photoIndex)
  return {
    type: PHOTO_REMOVE,
    tabIndex,
    photoIndex
  }
}
