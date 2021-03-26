import { useState } from "react";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import IconWrapper from "../../components/IconWrapper";

import {
    StyledWrapper,
    StyledTitleWrapper,
    StyledTextAreaWrapper,
    StyledButton,
} from "./styles";

const AddNewPage = (props) => {
    const [title, setTitle] = useState({ touched: false });
    const [content, setContent] = useState({ touched: false });

    const titleChangeHandler = (event) => {
        const newValue = event.target.value.trim();
        const newTitleobj = { ...title };
        newTitleobj.value = newValue;
        newTitleobj.touched = true;

        setTitle(newTitleobj);
    };

    const contentChangeHandler = (event) => {
        const newValue = event.target.value.trim();
        const newContentobj = { ...content };
        newContentobj.value = newValue;
        newContentobj.touched = true;

        setContent(newContentobj);
    };

    return (
        <StyledWrapper>
            <IconWrapper
                iconClickHandler={() => props.history.goBack()}
                iconComponent={<KeyboardBackspaceIcon />}
                text="Back"
            />
            <div>
                <h2>Let's add a new post!!</h2>
                <form onSubmit={(event) => event.preventDefault()}>
                    <StyledTitleWrapper>
                        <label>Title</label>
                        <input
                            placeholder="Title"
                            onChange={titleChangeHandler}
                            value={title.value}
                            type="text"
                            name="title"
                        />
                    </StyledTitleWrapper>
                    <StyledTextAreaWrapper>
                        <label>Content</label>
                        <textarea
                            placeholder="Content"
                            onChange={contentChangeHandler}
                            value={content.value}
                            type="text"
                            name="content"
                        />
                    </StyledTextAreaWrapper>
                    <StyledButton>ADD A NEW POST</StyledButton>
                </form>
            </div>
        </StyledWrapper>
    );
};

export default AddNewPage;
