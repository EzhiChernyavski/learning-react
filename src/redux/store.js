import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likeCount: 3 },
                { id: 2, message: "It's my first post", likeCount: 6 },
                { id: 3, message: "It's cool", likeCount: 23 },
                { id: 4, message: "Thank you!", likeCount: 1 }
            ],
            newPostText: 'Write your post'
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Yo" },
                { id: 3, message: "How are you?" }
            ],
            newMessageValue: "",
            dialogData: [
                { id: 1, name: "Ezhi", avatar: "" },
                {
                    id: 2,
                    name: "Kozhan",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    id: 3,
                    name: "Chaika",
                    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    id: 4,
                    name: "July",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    id: 5,
                    name: "Peter",
                    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
            ]
        },
    },

    _callSubscriber() { },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window._state = store;


