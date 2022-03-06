import styled from "styled-components";

const CardStyle = styled.div`
    height: 30%;
    width: 10%;
`;

const Image = styled.img`
    height: 20%;
    width: 100%;
    border-radius: 45px;
    object-fit: cover;
`;

const Card = () => (
    <CardStyle>
        <Image src="https://cdn.discordapp.com/attachments/949414956128927754/949815553562910740/unknown.png"/>
    </CardStyle>
);


export default Card;