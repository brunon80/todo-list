import React, {InputHTMLAttributes} from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs<React.FC<InputHTMLAttributes<HTMLInputElement>>>({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  opacity: 0;
`
export default HiddenCheckbox