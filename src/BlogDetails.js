import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Post Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <h3>Written by { blog.author }</h3>
          <div>
            { blog.content }
          </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
   );
}

export default BlogDetails;
