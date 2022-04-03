import React from 'react';
import {NavLink} from 'react-router-dom';
import navbar from './Navbar.module.css';
import FavoriteFriendsContainer from "./FavoriteFriends/FavoriteFriendsContainer";

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <NavLink
                    to="/"
                    className={navData => navData.isActive ? navbar.active : ''}>Profile</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink
                    to="/dialogs"
                    className={navData => navData.isActive ? navbar.active : ''}>Messages</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink
                    to="/news"
                    className={navData => navData.isActive ? navbar.active : ''}>News</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink
                    to="/music"
                    className={navData => navData.isActive ? navbar.active : ''}>Music</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink
                    to="/setting"
                    className={navData => navData.isActive ? navbar.active : ''}>Settings</NavLink>
            </div>

            {/*<div className={navbar.friends}>
                <h3>Friends</h3>
                {avatars}
            </div>*/}
            {<div className={navbar.friends}>
                <h3>Friends</h3>
                <FavoriteFriendsContainer />
            </div>}
        </nav>
    )
}

export default Navbar;