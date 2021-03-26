import styled from "styled-components";

import { colors } from "../../common/styles/index";

export const StyledTab = styled.div`
    text-align: center;
    border: solid 2px ${colors.salmon};
    border-radius: 15px;
    box-shadow: 0px 0px 20px ${colors.lightSalmon};

    padding: 10px;
    margin: 10px 5px;

    background-color: white;

    p {
        text-align: justify;
    }
`;

export const StyledTitleWrapper = styled.div`
    cursor: pointer;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 5px;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    height: 30px;
    width: ${(props) => (props.isDetailed ? "50%" : "35%")};
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border: 2px solid #ff7074;
    font-weight: 600;
    background-color: ${(props) => (props.delete ? colors.salmon : "white")};
    color: ${(props) => (!props.delete ? colors.salmon : "white")};
`;
