import styled from "styled-components";

import { colors } from "../../common/styles/index";

export const StyledWrapper = styled.div`
    display: flex;
    color: ${colors.salmon};
    width: 70px;
    align-items: center;

    svg {
        height: 30px;
        width: 30px;
    }
`;
