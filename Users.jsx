import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

const Users = () => {
    let [users,setUsers]=useState([])
    let[reload,setReload]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:5000/employees")
        .then((response)=>{setUsers(response.data);})
        .catch(()=>{console.log("error");})
        setReload(false)
    },[reload])

    let deleteUser=(id)=>{
        axios.delete(`http://localhost:5000/employees/${id}`)
        window.location.reload("users")
        setReload(true)

    }
    return (
        <div id={style.usersPage}>
            {users.map((user)=>{
                return(
                    <div>
                        <table>
                        <tr>
                        <td>Name</td>
                        <td>:{user.empName}</td>
                        </tr>
                        <tr>
                        <td>Salary</td>
                        <td>:{user.empSalary}</td>
                        </tr>
                        <tr><td>
                        Company</td>
                        <td>:{user.empCompany}</td>
                        </tr>
                        <tr>
                            <td>
                            <button ><Link to={`/edit/${user.id}`} >EDIT</Link></button>
                            </td>
                            <td><button onClick={()=>{deleteUser(user.id)}}>delete</button></td>
                        </tr>
                        </table>
                        </div>
                )
            })}
        </div>
    );
};

export default Users;