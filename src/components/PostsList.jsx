import PostCard from "./PostCard";

function PostList() {
    return (
        <>
            {postList.map((post) => <PostCard post={post} key={post.id} />)}
        </>
    )

};

export default PostList;