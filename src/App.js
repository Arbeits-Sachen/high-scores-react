import './App.css';
import allCountryScores from './scores.js';
import {useState} from "react";

function App() 
{
  const nameAscending = allCountryScores.sort((a, b) => a.name > b.name ? 1 : -1)
  const [sorting, setSorting] = useState("DES");

  const onClicked = () =>
  {
    if(sorting === "DES")
    {
      setSorting("AS")
    }

    else
    {
      setSorting("DES")
    }
  }

  const onSort = (country) =>
  {
    if(sorting === "DES")
    {
      return country.scores.sort(((a, b) => b.s - a.s)).map(element => <p>{element.n}: {element.s}</p>)
    }

    else
    {
      return country.scores.sort(((a, b) => a.s - b.s)).map(element => <p>{element.n}: {element.s}</p>)
    }
  }

  const onAllSort = (country) =>
  {
    if(sorting === "DES")
    {
      return country.scores.map(element => <p>{element.n}: {element.s}</p>)
    }

    else
    {
      return country.scores.map(element => <p>{element.n}: {element.s}</p>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClicked}>Sort</button>
        <h1>World Wide</h1>

        {allCountryScores.map(country =>
        (
          onAllSort(country)
        ))}

        {nameAscending.map(country =>
        (
          <div>
            <h1>{country.name}</h1>

            {onSort(country)}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
