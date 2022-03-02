import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://dixon-blog-api.herokuapp.com/posts' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://dixon-blog-api.herokuapp.com/posts' + blog.id, {
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
