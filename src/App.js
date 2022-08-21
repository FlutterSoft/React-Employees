import { useState } from 'react'
import './App.css';
import JSONDATA from './MOCK_DATA.json'
import Table from './Table.js'
import AddEmployee from './AddEmployee.js'

function App() {
  
  const [data, setData] = useState(JSONDATA)
  const [search, setSearch] = useState('')

  function handleSearch(e){
    setSearch(e.target.value)
  }
  function handleReset(){
    let sorted = [...data].sort((a,b) => a.id - b.id )
    setData(sorted)
    setSearch('')
  }

  function handleWipe(){
    if(window.confirm("Are you sure you want to delete every single employee never to return again? Like you'll have to input every single one all over again...?")){
      setData([{id:0, first_name: '', last_name: '', email: '', job_title: ''}])
    }

  }

  return (
    <div className="App">
      <h1>Employees</h1>
      <p>Search by first name, last name, email or job title</p>
      <p>Sort alphabetically by clicking table headers</p>
      <input value={search} placeholder='Search Employee' onChange={handleSearch}></input>

      <AddEmployee data={data} setData={setData}/>
      <div className="resetBtnContainer">
        <button 
          className="resetBtn" 
          onClick={handleReset}
        >Reset Sort
        </button>
        <button 
          className="resetBtn" onClick={handleWipe}
          >Delete All
        </button>
      </div>
 
      <Table data={data} search={search} setData={setData}/>
      
    </div>
  );
}

export default App;
