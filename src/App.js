import Movie from './components/Movie.jsx';
import { dummy } from './movieDummy';

function App() {
  return (
    <div>
      <div className='header'>
        <h1> The Movie </h1>
        <a href="#none" className='searchIcon'>
          O
        </a>
      </div>
      <div className='app-top'>
        <div className='app-txt'>
          <h2> Welcome </h2>
          <p> Millions of movies, TV shows and people to discover. </p>
        </div>
      </div>
      <div className="app-container">
        <div className='app-container-top'> 
          <h2> 오늘의 영화 </h2>
        </div>
        {
          dummy.results.map( (item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
