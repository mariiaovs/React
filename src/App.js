import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import classes from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <div className={classes.side}>
        <Navbar />
        <SidebarContainer />
      </div>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/" element={<ProfileContainer />} /> 
          <Route path="/profile/:userId" element={<ProfileContainer />} />  
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
