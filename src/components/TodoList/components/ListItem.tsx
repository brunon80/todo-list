import styled from 'styled-components'
import Remove from '../components/Remove'

const ListItem = styled.li`
    background-color: #262e4c;
	border-bottom:1px solid #1c2340;
	color: #b1b2c9;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 15px;
	justify-content: space-between;
	:hover {
		${Remove} {
			opacity: 1;
		}
	};
	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`

export default ListItem