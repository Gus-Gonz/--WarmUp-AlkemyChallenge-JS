import {
  StyledTab,
  StyledTitleWrapper,
  StyledButtonWrapper,
  StyledButton,
} from "./styles";

const PostTab = ({
  title,
  deleteHandler,
  moreDetailsHandler,
  modifyHandler,
}) => {
  return (
    <StyledTab>
      <StyledTitleWrapper onClick={moreDetailsHandler}>
        <h3>{title}</h3>
      </StyledTitleWrapper>
      <StyledButtonWrapper>
        <StyledButton delete={true} onClick={modifyHandler}>
          MODIFY
        </StyledButton>
        <StyledButton onClick={deleteHandler}>DELETE</StyledButton>
      </StyledButtonWrapper>
    </StyledTab>
  );
};

export default PostTab;
