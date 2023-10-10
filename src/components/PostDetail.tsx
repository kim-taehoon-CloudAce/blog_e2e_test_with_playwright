import React from "react";

export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">Lorem ipsum dolor sit amet</div>
        <div className="post__utils-box">
          <div className="post__delete">Delete</div>
          <div className="post__edit">Edit</div>
        </div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">kim</div>
          <div className="post__date">2023. xx.xx</div>
        </div>

        <div className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          iure minus neque. Laboriosam ipsa natus repudiandae voluptates libero
          et provident? Veritatis quisquam itaque quos aut et ipsum non labore
          ex
        </div>
      </div>
    </div>
  );
}
