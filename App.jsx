import React from 'react';
// import Findcoder from './components/Findcoder';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Explore from './components/Explore';
// import Hire from './components/Hire';
// import Dev from './components/Dev';
// import Challenge from './components/Challenge';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './CRUD/Home';
import Createuser from './CRUD/Createuser';
import Users from './CRUD/Users';
import Edituser from './CRUD/Edituser';

const App = () => {
    return (
        <div>
            
            {/* <BrowserRouter>
            <Findcoder/>
            <Routes>
            <Route element={<Explore/>} path='/explore'/>
            <Route element={<Hire/>} path='/hire'/>
            <Route element={<Dev/>} path='/dev'/>
            <Route element={<Challenge/>} path='challenge'/>
            </Routes>
            </BrowserRouter>  */}

            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Createuser/>} path='/'/>
                <Route element={<Users/>} path='/users'/>
                <Route element={<Edituser/>} path="/edit/:abc/"/>
            </Routes>
     
                </BrowserRouter>
        </div>
    );
};

export default App;