import { useState } from 'react'
import './App.css';
import JSONDATA from './MOCK_DATA.json'
import Table from './Table.js'

function App() {
  
  const [data, setData] = useState(JSONDATA)
  const [search, setSearch] = useState('')

  function handleSearch(e){
    setSearch(e.target.value)
  }
  function handleReset(){
    let sorted = [...data].sort((a,b) => a.id - b.id )
    setData(sorted)
  }
  return (
    <div className="App">
      <h1>Employees</h1>
      <p>Search by first name, last name, email or job title</p>
      <p>Sort alphabetically by clicking table headers</p>
      <input value={search} placeholder='Search Employee' onChange={handleSearch}></input>
      <button onClick={handleReset}>Reset</button>
      <Table data={data} search={search} setData={setData}/>
      
    </div>
  );
}

export default App;
