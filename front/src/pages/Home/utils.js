import PostTab from "../../components/PostTab";

export const mappingData = (data, history) => {
  return data.map((eachPost) => {
    return (
      <PostTab
        title={eachPost.title}
        deleteHandler={() => console.log(`DELETED!!`)}
        moreDetailsHandler={() => history.push("/detailedtab/" + eachPost.id)}
        modifyHandler={() => console.log(`MODIFY!!`)}
        key={eachPost.id}
      />
    );
  });
};
