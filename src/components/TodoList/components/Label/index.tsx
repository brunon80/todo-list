import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const Label = styled.span`
    text-decoration: ${(props: InputHTMLAttributes<HTMLInputElement>) => props.checked ? 'line-through' : 'none'};
    font-size: 20px;
`

export default Label