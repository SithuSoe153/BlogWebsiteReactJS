import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";

function BlogDetail() {
  let params = useParams();
  let url = `http://localhost:3001/blogs/${params.id}`;
  let [data, setData] = useState(null);
  let { data: blog, loading, error } = useFetch(url, setData, data);

  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  });

  return (
    <div className="Home">
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}

      {blog && (
        <div className="card">
          <h3>{blog.title}</h3>
          <p>posted by: {blog.author}</p>
          <p>upload date: {blog.date}</p>
          <Link to="/">Back to Home</Link>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
