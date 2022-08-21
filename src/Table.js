import React from 'react'
import { useState } from 'react'
export default function Table( {data, setData, search}){

    const [sorts, setSorts] = useState({firstName: false, lastName: false, email: false, jobTitle: false})
    // const [firstNameSort, setFirstNameSort] = useState(false)
    // const [lastNameSort, setLastNameSort] = useState(false)
    // const [emailSort, setEmailSort] = useState(false)
    // const [jobTitleSort, setJobTitleSort] = useState(false)

    function handleSortFirstName(){
        let sorted = [...data]
        if(sorts.firstName){
            sorted.sort((a,b) => b.first_name.localeCompare(a.first_name))
            setSorts({...sorts, firstName: false})
        }
        else{
            sorted.sort((a,b) => a.first_name.localeCompare(b.first_name))
            setSorts({...sorts, firstName: true, lastName: false, email: false, jobTitle: false})
        }
        setData(sorted)
    }
    function handleSortLastName(){
        let sorted = [...data]
        if(sorts.lastName){
            sorted.sort((a,b) => b.last_name.localeCompare(a.last_name))
            setSorts({...sorts, lastName: false})
        }
        else{
            sorted.sort((a,b) => a.last_name.localeCompare(b.last_name))
            setSorts({...sorts, firstName: false, lastName: true, email: false, jobTitle: false}) 
        }
        setData(sorted)
    }
    function handleSortEmail(){
        let sorted = [...data]
        if(sorts.email){
            sorted.sort((a,b) => b.email.localeCompare(a.email))
            setSorts({...sorts, email: false})
        }
        else{
            sorted.sort((a,b) => a.email.localeCompare(b.email))
            setSorts({...sorts, firstName: false, lastName: false, email: true, jobTitle: false})  
        }
        setData(sorted)
    }
    function handleSortJobTitle(){
        let sorted = [...data]
        if(sorts.jobTitle){
            sorted.sort((a,b) => b.job_title.localeCompare(a.job_title))
            setSorts({...sorts, jobTitle: false})
        }
        else{
            sorted.sort((a,b) => a.job_title.localeCompare(b.job_title))
            setSorts({...sorts, firstName: false, lastName: false, email: false, jobTitle: true})   
        }
        setData(sorted)
    }
    // filter data for rows
    const rows = data.filter(employee => {
        return (
          employee.first_name
            .toLowerCase()
            .includes(search.toLowerCase())
            ||
            employee.last_name
            .toLowerCase()
            .includes(search.toLowerCase())         
            ||
            employee.email
            .toLowerCase()
            .includes(search.toLowerCase())         
            ||
            employee.job_title
            .toLowerCase()
            .includes(search.toLowerCase())         
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
              <th onClick={handleSortFirstName}>First Name</th>
              <th onClick={handleSortLastName} >Last Name</th>
              <th onClick={handleSortEmail}>Email</th>
              <th onClick={handleSortJobTitle} >Job Title</th>
            </tr>
            {rows}
          </tbody>
        </table>
      )
}