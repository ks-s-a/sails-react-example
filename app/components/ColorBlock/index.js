import styled from 'styled-components';

export default styled.div`
  background: linear-gradient(135deg, ${(props) => props.reverse ? 'yellow, blue' : 'blue, yellow'});
  border-radius: 25px;
  height: 100px;
  margin-${(props) => props.reverse ? 'top' : 'bottom'}: 100px;
`