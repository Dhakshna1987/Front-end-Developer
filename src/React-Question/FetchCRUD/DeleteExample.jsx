import React from "react";

const DeleteExample = () => {
  const handleDelete = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeleteExample;
