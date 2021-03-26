import {
  StyledTab,
  StyledTitleWrapper,
  StyledButtonWrapper,
  StyledButton,
} from "./styles";

const PostTab = ({
  isDetailed,
  title,
  paragraf,
  deleteHandler,
  moreDetailsHandler,
  modifyHandler,
}) => {
  const paragrafTab = isDetailed ? <p>{paragraf}</p> : null;
  const buttons = !isDetailed ? (
    <StyledButtonWrapper>
      <StyledButton delete={true} onClick={modifyHandler}>
        MODIFY
      </StyledButton>
      <StyledButton onClick={deleteHandler}>DELETE</StyledButton>
    </StyledButtonWrapper>
  ) : null;

  return (
    <StyledTab>
      <StyledTitleWrapper onClick={moreDetailsHandler}>
        <h3>{title}</h3>
      </StyledTitleWrapper>
      {paragrafTab}
      {buttons}
    </StyledTab>
  );
};

export default PostTab;
