
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div>
      <MovieCard movie={{
        title:'Titanic',
        released_date:'2024'
      }}/>
      <MovieCard movie={{
        title:'John wick',
        released_date:'2011'
      }}/>
      <MovieCard movie={{
        title:'GOT',
        released_date:'2024'
      }}/>
    </div>
  );
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}
export default App;
