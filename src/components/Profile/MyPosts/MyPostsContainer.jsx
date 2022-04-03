import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let onPostChange = (value) => {
                    let action = updateNewPostActionCreator(value);
                    store.dispatch(action);
                };


                return <MyPosts
                    updateNewPostValue={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={state.profilePage.newPostText}

                />
            }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostValue: (value) => {
            let action = updateNewPostActionCreator(value);
            dispatch(action);
        }

    }
}

const newDialogContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default newDialogContainer;