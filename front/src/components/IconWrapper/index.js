import { StyledWrapper } from "./styles";

const PostTab = ({ iconComponent, iconClickHandler }) => {
  return (
    <StyledWrapper onClick={iconClickHandler}>{iconComponent}</StyledWrapper>
  );
};

export default PostTab;
