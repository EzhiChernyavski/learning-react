import React from "react";
import ff from "./FavoriteFriends.module.css";
import {NavLink} from "react-router-dom";
import StoreContext from "../../../StoreContext";
import FavoriteFriends from "./FavoriteFreinds";

const FavoriteFriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let path = "/dialogs/" + store.id;
                    return (
                        <FavoriteFriends
                            store={store}
                            path={path}
                        />
                        // <div className={ff.favoriteItem}>
                        //     <NavLink to={path}>
                        //         <img src={props.avatar}/>
                        //         {props.name}
                        //     </NavLink>
                        // </div>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default FavoriteFriendsContainer;