import styled from "styled-components";

import { fonts, colors } from "../../common/styles/index";

export const StyledWrapper = styled.main`
    display: flex;
    flex-flow: column;
    padding: 10px 20px;
    font-family: ${fonts.poppins};
    letter-spacing: -0.35px;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    height: 30px;
    width: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border: 2px solid #ff7074;
    font-weight: 600;
    background-color: ${(props) => (props.delete ? colors.salmon : "white")};
    color: ${(props) => (!props.delete ? colors.salmon : "white")};
`;
