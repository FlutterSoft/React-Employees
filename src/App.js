import { useState } from 'react'
import './App.css';
import JSONDATA from './MOCK_DATA.json'
function App() {
  
  const [search, setSearch] = useState('')

  const employeesList = JSONDATA.filter(employee => employee.first_name.toLowerCase().includes(search.toLowerCase())).map( employee => {
    return(
      <li key={employee.id}> {employee.first_name}</li>
    )
  })

  function handleSearch(e){
    setSearch(e.target.value)
  }

  function Table(){
    const rows = JSONDATA.filter(employee => {
      return (
        employee.first_name
          .toLowerCase().
          includes(search.toLowerCase())
          ||
          employee.last_name
          .toLowerCase().
          includes(search.toLowerCase())         
          ||
          employee.email
          .toLowerCase().
          includes(search.toLowerCase())         
          ||
          employee.job_title
          .toLowerCase().
          includes(search.toLowerCase())         
      )
    }).map(employee => {
        return(
          <tr key={employee.id}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td>{employee.job_title}</td>
          </tr>
        )
    })
    return(
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
          </tr>
          {rows}
        </tbody>
      </table>
    )
  }

  return (
    <div className="App">
      <h1>Employees</h1>
      <input value={search} placeholder='Search Employee' onChange={handleSearch}></input>

      <Table />
      
    </div>
  );
}

export default App;
