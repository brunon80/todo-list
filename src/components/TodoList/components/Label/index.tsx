import styled from 'styled-components'

type LabelProps = {
    checked: boolean;
}

const Label = styled.span<LabelProps>`
    text-decoration: ${(props) => props.checked ? 'line-through' : 'none'};
    font-size: 20px;
`

export default Label