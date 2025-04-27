import PostCard from "./PostCard";
import { useContext } from "react";
import Context from "../context/Context";

function PostList() {

    const { postList } = useContext(Context);

    return (
        <>
            {postList.map((post) => <PostCard post={post} key={post.id} />)}
        </>
    )

};

export default PostList;