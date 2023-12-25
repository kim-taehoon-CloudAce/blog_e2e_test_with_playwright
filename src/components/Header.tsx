import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <Link to="/" className="header__logo">Blog</Link>
      <div>
        <Link to="/posts/new">write</Link>
        <Link to="/posts">posts</Link>
        <Link to="/profile">profile</Link>
      </div>
    </header>
  );
}
