import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css'
const Home = () => {
    return (
     <div id={style.nav}>
         <Link to="/">Createuser</Link>
            <Link to="/Users">Users</Link>
     </div>
    );
};

export default Home;