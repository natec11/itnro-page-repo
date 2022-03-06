import styled from "styled-components";

const CardStyle = styled.div`
    height: 20%;
    width: 90%;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const Heading = styled.h2`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 250%;
    line-height: 100%;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0% 0% 20% 147%;
`;

const Card = () => (
    <CardStyle>
        <Layout>
            <Text>
                <Heading>with language services in...</Heading>
            </Text>
        </Layout>
    </CardStyle>
);

export default Card;
