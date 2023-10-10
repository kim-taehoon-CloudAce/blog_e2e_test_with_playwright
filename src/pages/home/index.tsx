import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <title>My Posts</title>
        <div>
          <Link to="/posts/new">write</Link>
          <Link to="/posts">posts</Link>
          <Link to="/profile">profile</Link>
        </div>
      </header>
      <div className="post__navigation">
        <div className="post__navigation--active">All</div>
        <div>My Posts</div>
      </div>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div className="post__box" key={index}>
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">test post</div>
                <div className="post__date">2023. xx.xx</div>
              </div>
              <div className="post__title">Post:{index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure minus neque. Laboriosam ipsa natus repudiandae
                voluptates libero et provident? Veritatis quisquam itaque quos
                aut et ipsum non labore ex
              </div>
              <div className="post__utils-box">
                <div className="post__delete">Delete</div>
                <div className="post__edit">Edit</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link to="/posts/new">write</Link>
        <Link to="/posts">posts</Link>
        <Link to="/profile">profile</Link>
      </footer>
    </div>
  );
}
