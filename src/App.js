import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Navbar state={props.state}/>*/}
            <Navbar />
            <div className="app-wrapper__content">
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;