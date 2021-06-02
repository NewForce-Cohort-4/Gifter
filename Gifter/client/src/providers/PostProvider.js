import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const getAllPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const searchPosts = () => {
        console.log("You have searched the posts!")
        return fetch(`/api/post/search?q=${searchTerm}`)
        .then(r => r.json())
        .then(setPosts)
    }

    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, searchTerm, setSearchTerm }}>
            {props.children}
        </PostContext.Provider>
    );
};