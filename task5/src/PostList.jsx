import { useMemo, useEffect } from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, search }) => {

    useEffect(() => {
        console.log("PostList re-rendered");
    });

    const filteredPosts = useMemo(() => {
        console.log("Filtering posts...");
        return posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [posts, search]);

    return (
        <div className="space-y-4">
            {filteredPosts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
