import React from 'react'
import { useState } from 'react'
import DeleteIcon from './imgs/delete.png'
import EditIcon from './imgs/edit.png'

export default function Table( {data, setData, search}){

    const [sorts, setSorts] = useState({id: false, firstName: false, lastName: false, email: false, jobTitle: false})

    const [editing, setEditing] = useState(false)
    function handleSortFirstName(){
      let sorted = [...data]
        if(sorts.firstName){
          sorted.sort((a,b) => b.first_name.localeCompare(a.first_name))
          setSorts({...sorts, firstName: false})
        }
        else{
            sorted.sort((a,b) => a.first_name.localeCompare(b.first_name))
            setSorts({...sorts, id: false, firstName: true, lastName: false, email: false, jobTitle: false})
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
            setSorts({...sorts, id: false, firstName: false, lastName: true, email: false, jobTitle: false}) 
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
            setSorts({...sorts, id: false, firstName: false, lastName: false, email: true, jobTitle: false})  
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
            setSorts({...sorts, id: false, firstName: false, lastName: false, email: false, jobTitle: true})   
        }
        setData(sorted)
    }

    function handleSortId(){
      let sorted = [...data]
      if(sorts.id){
          sorted.sort((a,b) => b.id - a.id)
          setSorts({...sorts, id: false})
      }
      else{
          sorted.sort((a,b) => a.id - b.id)
          setSorts({...sorts, id: true, firstName: false, lastName: false, email: false, jobTitle: false})   
      }
      setData(sorted)      
    }
    
    function handleDelete(e){
      let selection = e.target.parentNode.childNodes[0].innerText
      let newData = data.filter(employee => employee.id !== Number(selection))
      console.log(newData)
      setData(newData)
    }

    function handleEdit(e){
      setEditing(!editing)
      if(editing){
        const current = {id: Number(e.target.parentNode.childNodes[0].innerText), first_name: e.target.parentNode.childNodes[1].innerText, last_name: e.target.parentNode.childNodes[2].innerText, email: e.target.parentNode.childNodes[3].innerText, job_title: e.target.parentNode.childNodes[4].innerText}
        e.target.parentNode.childNodes[1].innerHTML=`<input placeholder=${current.first_name} />`
        e.target.parentNode.childNodes[2].innerHTML=`<input placeholder=${current.last_name} />`
        e.target.parentNode.childNodes[3].innerHTML=`<input placeholder=${current.email} />`
        e.target.parentNode.childNodes[4].innerHTML=`<input placeholder=${current.job_title} />`
      }

      else{
        // save the current values back to the data object
      }
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
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.job_title}</td>
              <td className="tableIconContainer" onClick={handleEdit}>
                <img className="icon"  src={EditIcon}/>
              </td>
              <td className="tableIconContainer" onClick={handleDelete}>
                <img className="icon" src={DeleteIcon}/>
              </td>
            </tr>
          )
      })

      return(
        <table>
          <tbody>
            <tr>
              <th onClick={handleSortId}>ID</th>
              <th onClick={handleSortFirstName}>First Name</th>
              <th onClick={handleSortLastName} >Last Name</th>
              <th onClick={handleSortEmail}>Email</th>
              <th onClick={handleSortJobTitle} >Job Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {rows}
          </tbody>
        </table>
      )
}