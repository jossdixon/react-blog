import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('https://dixon-blog-api.herokuapp.com/api/version1/posts');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>BLOGS LOADING</div> }
      { data && <BlogList blogs={ data } title="Posts"/> }
    </div>
   );
}

export default Home;
