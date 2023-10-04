import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";


function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="new" element={<h1>New Post Here</h1>} />
        </Routes>
    );
}

export default AppRoutes;