import React, { useEffect } from 'react';
import style from './Home.module.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Edituser = () => {
    let userId=useParams();
    let navigate=useNavigate()

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")
    

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={
            empName: name,
            empSalary: salary,
            empCompany: company
        }
        axios.put(`http://localhost:5000/employees/${userId.abc}`,payload)
        .then(()=>{console.log("updated");
        navigate("/Users")})
        .catch(()=> {console.log("errrr");})
        
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/employees/${userId.abc}`)
        .then((response)=>{
        setName(response.data.empName)
        setSalary(response.data.empSalary)
        setCompany(response.data.empCompany)
        })
        .catch(()=>{console.log("Error");})
    },[userId])
    let getName = (e) => {
        setName(e.target.value)
    }
    let getSalary = (e) => {
        setSalary(e.target.value)
    }
    let getCompany = (e) => {
        setCompany(e.target.value)
    }
     return (
        <div id={style.create}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={getName} />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={getSalary}  />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={getCompany} />
                <button onClick={formHandle}>Update</button>
            </form>
        </div>
    );
};

export default Edituser;