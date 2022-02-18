import React from "react";
import ff from "./FavoriteFriends.module.css";
import {NavLink} from "react-router-dom";

const FavoriteFriends = (props) => {
    return (
        <div className={ff.favoriteItem}>
            <NavLink to={props.path}>
                <img src={props.store.avatar}/>
                {props.name}
            </NavLink>
        </div>
    )
}
export default FavoriteFriends;