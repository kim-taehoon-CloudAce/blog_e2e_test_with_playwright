import React, { useState } from "react";
import { Link } from "react-router-dom";

interface PostlistProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function Postlist({ hasNavigation = true }: PostlistProps) {
  // do not show navigation in profile page

  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            All
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            My Posts
          </div>
        </div>
      )}

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
    </>
  );
}
