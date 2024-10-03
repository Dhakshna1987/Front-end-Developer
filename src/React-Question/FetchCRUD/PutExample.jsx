import React, { useState } from "react";

const PutExample = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      body,
      userId: 1,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      const result = await response.json();
      console.log("Post updated:", result);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Updated Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Updated Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default PutExample;
