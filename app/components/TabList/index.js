import React from 'react'
import styled from 'styled-components';
import Tab from '../../components/Tab'

class TabList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  createTagList() {
    return this.props.tabList.map((tab, i) => {
      const attrs = {} // define active attribute
      if (tab.isActive)
        attrs.active = true

      return <Tab key={i} onClick={ this.props.onClick.bind(this, i) } {...attrs}><span>{ `${tab.title} (${tab.files.length})` }</span></Tab>
    }, this)
  }

  render() {
    return <ul className={ this.props.className }>
      { this.createTagList() }
    </ul>
  }

}

export default styled(TabList)`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 0;
  padding: 0;
`
