import React from "react";
import FavoriteFriends from "./FavoriteFriends";
import {connect} from "react-redux";
import {updateFavoriteFriends} from "../../../redux/favoriteFriend-reducer";

const mapStateToProps = (state) => {
    return {
        favoriteFriends: state.favoriteFriends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFavoriteFriends: () => {
            let action = updateFavoriteFriends();
            dispatch(action);
        }
    }
}
/*
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
}*/

const FavoriteFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (FavoriteFriends);

export default FavoriteFriendsContainer;