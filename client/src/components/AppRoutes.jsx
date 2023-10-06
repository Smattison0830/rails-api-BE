import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import NewPost from "./NewPost";


function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="/posts/new" element={<NewPost />} />
        </Routes>
    );
}

export default AppRoutes;