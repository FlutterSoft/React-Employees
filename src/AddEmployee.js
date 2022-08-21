import React from 'react'

export default function AddEmployee( {data, setData}){

    function handleSubmit(e){
        // figure out how to prevent duplicates
        e.preventDefault()
        const newData = data[0].first_name != '' ? [...data] : []
        const nextId = Math.max(...data.map(x => x.id))+1
        const newEmployee = {
          id : nextId,
          first_name : e.target.firstName.value,
          last_name : e.target.lastName.value,
          email : e.target.email.value,
          job_title : e.target.jobTitle.value,
        }
        newData.push(newEmployee)
        setData(newData)
      }

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" type="text" placeholder='First Name' required />
            <input name="lastName" type="text" placeholder='Last Name' required />
            <input name="email" type="email" placeholder='Email' required />
            <input name="jobTitle" type="text" placeholder='Job Title' required />
            <input type="submit" name="Submit"  />
        </form>
    )

}
