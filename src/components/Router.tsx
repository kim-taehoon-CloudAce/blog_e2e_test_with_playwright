import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import PostPage from "../pages/posts/detail";

import LoginPage from "../pages/login";
import SignUp from "../pages/signup";
import ProfilePage from "../pages/profile";
import { useState } from "react";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({isAuthenticated}: RouterProps) {
  ///const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // move to App.tsx
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}
