import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  let url = "http://localhost:3001/blogs";

  let [data, setData] = useState(null);

  let { data: blogs, loading, error } = useFetch(url, setData, data);

  return (
    <div className="Home">
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}

      {blogs &&
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>posted by: {blog.author}</p>
            <p>upload date: {blog.date}</p>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
