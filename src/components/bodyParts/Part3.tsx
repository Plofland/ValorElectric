import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const Part3 = () => {
    return (
        <Part3Container>
            <LeftSection>
                <CenteredFade direction="left" triggerOnce>
                    <MosaicGrid>
                        {/* Left column: scissorLift as tall hero */}
                        <HeroPhoto
                            src="/scissorLift.jpeg"
                            alt="A fully extended scissor lift being used to access and repair a light in a warehouse"
                        />

                        {/* Right column: 3 stacked photos */}
                        <RightColumn>
                            <StackedPhoto
                                src="/ceilingFan.jpeg"
                                alt="A ceiling fan installation"
                            />
                            <StackedPhoto
                                src="/litLivingRoom.jpeg"
                                alt="A beautifully lit living room"
                            />
                            <StackedPhoto
                                src="/andrewFromBehind.jpeg"
                                alt="Electrician working on site"
                            />
                        </RightColumn>
                    </MosaicGrid>
                </CenteredFade>
            </LeftSection>
            <RightSection>
                <CenteredFade
                    cascade
                    direction="right"
                    damping={0.15}
                    triggerOnce
                >
                    <CopyContainer>
                        <Fade cascade damping={0.15} delay={600} triggerOnce>
                            <h3>Proud to Serve</h3>
                            <ul>
                                <li>Knightdale, NC</li>
                                <li>Raleigh, NC</li>
                                <li>Garner, NC</li>
                                <li>and surrounding areas</li>
                            </ul>
                        </Fade>
                    </CopyContainer>
                </CenteredFade>
            </RightSection>
        </Part3Container>
    );
};

export default Part3;

const Part3Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
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

const RightSection = styled.div`
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

/* Mosaic: hero photo on the left, stacked column on the right */
const MosaicGrid = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    max-width: 480px;
    /* Fixed height so both columns share the same vertical space */
    height: 380px;

    @media (max-width: 768px) {
        height: 260px;
        max-width: 100%;
    }
`;

const photoBase = `
    border-radius: 10px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.38);
    object-fit: cover;
    transition: transform 0.35s ease, filter 0.35s ease;

    &:hover {
        transform: scale(1.03);
        filter: brightness(1.08);
    }
`;

/* Left hero: fills full height of the grid */
const HeroPhoto = styled.img`
    ${photoBase}
    flex: 0 0 55%;
    height: 100%;
    width: 55%;
`;

/* Right column: three equal-height stacked photos */
const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    overflow: hidden;
`;

const StackedPhoto = styled.img`
    ${photoBase}
    width: 100%;
    flex: 1;
    min-height: 0; /* critical: lets flex children shrink inside a fixed-height parent */
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