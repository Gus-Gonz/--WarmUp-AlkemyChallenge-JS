import { useState, useEffect } from "react";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import IconWrapper from "../../components/IconWrapper";
import PostTab from "../../components/PostTab";
import { StyledWrapper } from "./styles";

import { getSinglePostData } from "../../helper/axios/axios";

const DetailedTabPage = (props) => {
    const [singlePost, setSinglePost] = useState([]);

    useEffect(() => {
        const id = props.match.params.id;
        getSinglePostData(id)
            .then((response) => {
                if (response.status === 200) {
                    setSinglePost(response.data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <StyledWrapper>
            <IconWrapper
                iconClickHandler={() => props.history.goBack()}
                iconComponent={<KeyboardBackspaceIcon />}
                text="Back"
            />
            <PostTab
                isDetailed
                paragraf={singlePost.body}
                title={singlePost.title}></PostTab>
        </StyledWrapper>
    );
};

export default DetailedTabPage;
