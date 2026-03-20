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
    padding: 2rem 1.5rem;
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
    max-width: 540px;
    /* Fixed height so both columns share the same vertical space */
    height: 420px;

    @media (max-width: 768px) {
        height: 280px;
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
