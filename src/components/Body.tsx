import styled from 'styled-components';
import electricianPortrait from '/david-cain-TVPI5pHpNFw-unsplash.jpg';

const Body = () => {
	return (
		<BodyContainer>
			<LeftSection>
				<Portrait src={electricianPortrait} alt="Portrait of an electrician"/>	

				
			</LeftSection>
			<RightSection>
				<CopyContainer>
					<h3>
						Our licensed electricians provide
						safe, reliable electrical solutions
						for homes and businesses of all
						sizes. From small repairs to full
						system installations, we deliver
						quality workmanship, clear
						communication, and dependable
						service you can trust.
					</h3>
					<ul>
						<li>
							Residential Electrical Services
						</li>
						<li>
							Commercial Electrical Services
						</li>
						<li>
							Lighting Installation and
							Upgrades
						</li>
						<li>
							Panel Upgrades and Circuit
							Breaker Replacement
						</li>
						<li>
							Wiring for Renovations, New
							Builds, and Additions
						</li>
					</ul>
				</CopyContainer>
			</RightSection>
		</BodyContainer>
	);
};

export default Body;

const BodyContainer = styled.div`
	display: flex;
	width: 100%;
	height: 500px;
	background-color: #ffffff;
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08); /* subtle drop shadow */
`;

const LeftSection = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RightSection = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CopyContainer = styled.div`
	background-color: #faf7f5;
	border-radius: 12px;
	padding: 32px;
	max-width: 90%;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);


	h3,
	ul {
		margin: 0 0 15px 0;
		text-align: left;
	}

	ul {
		padding-left: 20px;
	}
`;

const Portrait = styled.img`
	max-width: 80%;
	max-height: 80%;
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 12px;
`;
