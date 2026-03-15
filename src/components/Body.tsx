import styled from 'styled-components';
import Part1 from './bodyParts/part1';
const Body = () => {
	return (
		<BodyContainer>
			<Part1 />
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 70vh;
	margin: 0;
	font-size: 1.2rem;
	box-shadow: 0 0px 30px rgba(0, 0, 0, 0.65);
	/* border: 1px solid #000000; */

	// Soft Neutral (Modern & Balanced)
	background-color: #ececec;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 1rem;
	}
`;
