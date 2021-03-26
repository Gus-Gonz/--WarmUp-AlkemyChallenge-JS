import { useState, useEffect } from "react";

import { StyledWrapper, StyledButton } from "./styles";

import { getAllPosts } from "../../helper/axios/axios";
import { mappingData } from "./utils";

const HomePage = (props) => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getAllPosts()
            .then((response) => {
                if (response.status === 200) {
                    setPostsList(response.data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <StyledWrapper>
            <StyledButton onClick={() => props.history.push("/addnew")}>
                NEW POST
            </StyledButton>
            {mappingData(postsList, props.history)}
        </StyledWrapper>
    );
};

export default HomePage;
