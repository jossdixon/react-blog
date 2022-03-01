import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Can't find that page.</h2>
      <p>Alas, it is not here.</p>
      <Link to="/">Home</Link>
    </div>
   );
}

export default NotFound;
