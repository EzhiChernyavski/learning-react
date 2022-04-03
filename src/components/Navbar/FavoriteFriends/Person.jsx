import React from "react";
import ff from "./FavoriteFriends.module.css";
import {NavLink} from "react-router-dom";

const Person = (props) => {
    let pathname = '/dialogs/' + props.id;
    return (
        <div className={ff.favoriteItem}>
            <NavLink to={pathname}>
                <img src={props.avatar}/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )

}
export default Person;