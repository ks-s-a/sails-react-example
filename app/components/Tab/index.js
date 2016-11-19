import styled from 'styled-components';

export default styled.li`
  font-style: Roboto;
  flex: auto;
  list-style-type: none;
  text-align: center;
  color: ${props => props.active ? '#000' : '#507fa6'};

  ${props => props.active ? `
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 5px 0 #fff, 0 0 5px #888;
    padding: 5px 0;
  ` : ''}
`
