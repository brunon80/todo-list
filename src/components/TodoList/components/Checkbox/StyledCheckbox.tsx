import styled from 'styled-components'
import HiddenCheckbox from './HiddenCheckbox'
import Icon from './Icon'

type StyledCheckboxProps = {
  checked?: boolean
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => props.checked ? 'salmon' : '#404a6e'};
  border-radius: 30px;
  padding: 5px;
  transition: all 100ms;
  margin-right: 15px;
  ${HiddenCheckbox}:active + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

export default StyledCheckbox