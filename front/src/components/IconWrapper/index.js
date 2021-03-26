import { StyledWrapper } from "./styles";

const PostTab = ({ iconComponent, iconClickHandler, text }) => {
    return (
        <StyledWrapper onClick={iconClickHandler}>
            {iconComponent}
            {text}
        </StyledWrapper>
    );
};

export default PostTab;
