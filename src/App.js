import './App.css';
import allCountryScores from './scores.js';
import {useState} from "react";

function App() 
{
  const nameAscending = allCountryScores.sort((a, b) => a.name > b.name ? 1 : -1)
  const [sorting, setSorting] = useState("DES");

  let all = [];

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
      return country.scores.sort((a, b) => b.s - a.s).map(element => <p>{element.n}: {element.s}</p>)
    }

    else
    {
      return country.scores.sort(((a, b) => a.s - b.s)).map(element => <p>{element.n}: {element.s}</p>)
    }
  }



  const onAllSort = (country) =>
  {
    all = [...all, ...country.scores]

    all.sort((a, b) => b.s - a.s)
  }




  const createWorldWide = (each) =>
  {
    if(sorting === "DES")
    {
      all.sort((a, b) => b.s - a.s)
    }

    else
    {
      all.sort((a, b) => a.s - b.s)
    }
    console.log(each)

    return <p>{each.n}: {each.s}</p>
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

        {all.map(each =>
        (
          createWorldWide(each)
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

