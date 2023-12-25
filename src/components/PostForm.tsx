import React from "react";

export default function PostForm() {
  return (
    <form className="form" action="/post" method="post">
      <div className="form__block">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form__block">
        <label htmlFor="summary">Summary</label>
        <input type="text" name="summary" id="summary" required />
      </div>
      <div className="form__block">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" required></textarea>
      </div>
      <div className="form__block">
        <input type="submit" value="Submit" className="form__btn--submit" />
      </div>
    </form>
  );
}
