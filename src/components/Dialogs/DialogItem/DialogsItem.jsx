import React from 'react';
import dialogsItem from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogsItem.dialog}>
            <NavLink to={path}>
                <img className={dialogsItem.avatar}  src={props.avatar}/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;