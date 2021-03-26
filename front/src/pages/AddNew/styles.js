import styled from "styled-components";

import { fonts, colors } from "../../common/styles/index";

export const StyledWrapper = styled.main`
    display: flex;
    flex-flow: column;
    padding: 10px 20px;
    font-family: ${fonts.poppins};
    letter-spacing: -0.35px;

    text-align: center;
    border: solid 2px ${colors.salmon};
    border-radius: 15px;
    box-shadow: 0px 0px 20px ${colors.lightSalmon};

    margin: 10px auto;
    max-width: 80%;
    min-height: 500px;
    color: ${colors.salmon};
    background-color: white;
`;

export const StyledTitleWrapper = styled.div`
    display: flex;
    flex-flow: column;

    label {
        position: relative;
        top: 25px;
        z-index: -10;
    }

    input {
        border: none;
        border-bottom: 2px solid ${colors.salmon};
    }
`;

export const StyledTextAreaWrapper = styled.div`
    display: flex;
    flex-flow: column;

    label {
        position: relative;
        top: 25px;
        z-index: -10;
    }

    textarea {
        border: none;
        border: 0.5px solid ${colors.salmon};
        border-bottom: 2px solid ${colors.salmon};
        height: 300px;
        margin-bottom: 15px;
    }
`;

export const StyledButton = styled.button`
    cursor: pointer;
    height: 30px;
    width: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border: 2px solid #ff7074;
    font-weight: 600;
    background-color: ${colors.salmon};
    color: white;
`;
