const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_VALUE = "UPDATE-NEW-POST-VALUE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 3},
        {id: 2, message: "It's my first post", likeCount: 6},
        {id: 3, message: "It's cool", likeCount: 23},
        {id: 4, message: "Thank you!", likeCount: 1}
    ],
    newPostText: 'Write your post'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newMessage, likeCount: 0}],
                newPostText: "",
            };
        case UPDATE_NEW_POST_VALUE:
            return {
                ...state,
                newPostText: action.newValue,
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (value) => (
    {
        type: UPDATE_NEW_POST_VALUE,
        newValue: value
    }
);


export default profileReducer;