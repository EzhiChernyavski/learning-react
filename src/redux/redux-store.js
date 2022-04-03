import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import favoriteFiendsReducer from "./favoriteFriend-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    favoriteFriends: favoriteFiendsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;