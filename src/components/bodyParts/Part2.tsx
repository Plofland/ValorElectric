import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part2 = () => {
    return (
        <Part2Container>
            <LeftSection>
                <CenteredFade
                    cascade
                    direction="right"
                    damping={0.15}
                    triggerOnce
                >
                    <ServicesCopyContainer>
                        <h3>Types of Services</h3>
                        <ul>
                            <Fade
                                cascade
                                damping={0.15}
                                delay={600}
                                triggerOnce
                            >
                                <li>
                                    Residential Electrical
                                    Services
                                </li>
                                <li>
                                    Commercial Electrical
                                    Services
                                </li>
                                <li>
                                    Installation and
                                    Upgrades
                                </li>
                                <li>
                                    Repair and Maintenance
                                </li>
                                <li>
                                    Inspection and Testing
                                </li>
                            </Fade>
                        </ul>
                    </ServicesCopyContainer>
                </CenteredFade>
            </LeftSection>
            <RightSection>
                <CenteredFade direction="left" triggerOnce>
                    <BeforeAfterContainer>
                        <PhotoWrapper>
                            <Photo
                                src="/fuseBox.jpeg"
                                alt="Before image of a fuse box containing fuses"
                            />
                        </PhotoWrapper>

                        <ArrowBadge>
                            <i className="fa-solid fa-arrow-right" />
                        </ArrowBadge>

                        <PhotoWrapper>
                            <Photo
                                src="/fuseBoxAfter.jpeg"
                                alt="After image of a modern circuit breaker panel"
                            />
                        </PhotoWrapper>
                    </BeforeAfterContainer>
                </CenteredFade>
            </RightSection>
        </Part2Container>
    );
};

export default Part2;

const Part2Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
	min-height: 60vh;
	
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const RightSection = styled.div`
    display: flex;
    flex: 0 0 50%;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
    }
`;

const CenteredFade = styled(Fade)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* Holds both photos + the arrow in a row */
const BeforeAfterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
`;

/* Gives each photo a subtle framing context */
const PhotoWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

/* Circular badge with the arrow icon */
const ArrowBadge = styled.div`
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #1a1a2e;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
    font-size: 1rem;

    /* Subtle pulse to draw the eye across the two photos */
    animation: pulse 2.4s ease-in-out infinite;

    @keyframes pulse {
        0%,
        100% {
            transform: scale(1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
        }
        50% {
            transform: scale(1.12);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.45);
        }
    }

    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        font-size: 0.8rem;
    }
`;

const CopyContainer = styled.div`
    background-color: #f8fafc;
    border-radius: 12px;
    padding: 32px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
    h3,
    ul {
        margin: 0 0 15px 0;
        text-align: left;
    }
    ul {
        list-style-position: inside;
    }
    p {
        line-height: 1.5;
    }
    @media (max-width: 768px) {
        padding: 24px;
        p {
            line-height: 1;
        }
    }
`;

const ServicesCopyContainer = styled(CopyContainer)`
    @media (max-width: 768px) {
        margin-top: 1.5rem;
    }
`;

const Photo = styled.img`
    width: 100%;
    max-width: 220px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
    transition: transform 0.35s ease, filter 0.35s ease;

    &:hover {
        transform: scale(1.03);
        filter: brightness(1.08);
    }

    @media (max-width: 768px) {
        max-width: 140px;
    }
`;