import React, { useState } from 'react';
import style from './Home.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Createuser = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")
    let navigate = useNavigate()
    

    let getName = (e) => {
        setName(e.target.value)
    }
    let getSalary = (e) => {
        setSalary(e.target.value)
    }
    let getCompany = (e) => {
        setCompany(e.target.value)
    }
    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            empName: name,
            empSalary: salary,
            empCompany: company
        }
        
        axios.post("http://localhost:5000/employees", payload)
            .then(() => { console.log("Data has been stored");
            navigate("/users") })
            .catch(() => { console.log("error"); })
    }

    return (
        <div id={style.create}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={getName} />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={getSalary} />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={getCompany} />
                <button onClick={formHandle}>Submit</button>
            </form>

        </div>
    );
};

export default Createuser;