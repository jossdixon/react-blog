import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('david');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog');
      setIsPending(false);
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          value={ content }
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="david">David</option>
          <option value="tina">Tina</option>
          <option value="chris">Chris</option>
          <option value="jerry">Jerry</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding...</button> }
      </form>
    </div>
   );
}

export default Create;
