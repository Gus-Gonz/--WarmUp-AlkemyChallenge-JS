import { useState, useEffect } from "react";
import PostTab from "../../components/PostTab";

import { getSinglePostData } from "../../helper/axios/axios";

import { StyledWrapper } from "./styles";

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
      <PostTab
        isDetailed
        paragraf={singlePost.body}
        title={singlePost.title}></PostTab>
    </StyledWrapper>
  );
};

export default DetailedTabPage;
