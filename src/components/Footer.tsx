import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/posts/new">write</Link>
      <Link to="/posts">posts</Link>
      <Link to="/profile">profile</Link>
    </footer>
  );
}
