import styled from "styled-components";

const CardStyle = styled.div`
    height: 30%;
    width: 40%;
    border-radius: 14px;
`;

const Image = styled.img`
    height: 100%;
    width: 80%;
`;

const Card = () => (
    <CardStyle>
        <Image src="https://www.slideteam.net/media/catalog/product/cache/330x186/4/_/4_step_process_for_leadership_delegating_infographic_template_slide01.jpg"/>
    </CardStyle>
);

export default Card;