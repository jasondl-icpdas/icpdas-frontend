import styled from 'styled-components'
import Image from 'next/image';

const Container = styled.div`
    height: fit-content;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
`;
const Heading = styled.div`

`;

export const Navbar = () => {
    return (
        <Container>
            <Image
                src="/images/icp-das-usa-logo-128.png"
                alt="ICP DAS USA"
                height={128}
                width={128}
                />
            <h1>Hello Worlds!</h1>
            
        </Container>
    )
}
