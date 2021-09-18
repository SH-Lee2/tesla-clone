import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        <RightButton>{rightBtnText}</RightButton>
                    </ButtonGroup>
                </Fade>
                <DownArrow src="https://sh-lee2.github.io/tesla-clone/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: ${(props) =>
        `url("https://sh-lee2.github.io/tesla-clone/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ItemText = styled.div`
    padding: 15vh;
    text-align: center;
`;
const LeftButton = styled.div`
    background-color: rgb(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    color: white;
    opacity: 0.85;
    margin: 8px;
`;
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.2s;
    overflow-x: hidden;
`;

const Buttons = styled.div``;
