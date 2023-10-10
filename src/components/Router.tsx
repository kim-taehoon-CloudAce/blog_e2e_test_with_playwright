import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import PostPage from "../pages/posts/detail";
import Profile from "../pages/profile";
import LoginPage from "../pages/login";
import SignUp from "../pages/sinup";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}
