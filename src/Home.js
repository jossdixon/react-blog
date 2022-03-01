const Home = () => {

  const handleClick = () => {
    console.log('pow');
  }

  return (
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
   );
}

export default Home;
