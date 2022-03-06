import styled from "styled-components";

const CardStyle = styled.div`
    height: 30%;
    width: 90%;
    border-radius: 10%;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1% 80%;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Heading = styled.h2`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 150%;
    line-height: 100%;

    color: #000000;
    padding: 30% 110%;
    background: #ffff00;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 1% 0% 200% 40%;
`;

const Card = () => (
    <CardStyle>
        <Layout>
            <Text>
                <Heading>Search</Heading>
            </Text>
        </Layout>
    </CardStyle>
);

export default Card;
