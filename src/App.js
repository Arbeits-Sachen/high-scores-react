import './App.css';
import allCountryScores from './scores.js';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        {allCountryScores.map(country =>
          (
          <div>
            <h1>{country.name}</h1>

            {country.scores.map(element =>
            
              <p>{element.n}: {element.s}</p>
            )}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
