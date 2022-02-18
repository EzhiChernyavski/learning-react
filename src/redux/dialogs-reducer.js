const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_VALUE = "UPDATE_NEW_MESSAGE_VALUE,";

let initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "How are you?"}
    ],
    newMessageValue: "",
    dialogData: [
        {id: 1, name: "Ezhi", avatar: ""},
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageValue
            };
            state.messagesData.push(newMessage);
            state.newMessageValue = "";
            return state;
        case UPDATE_NEW_MESSAGE_VALUE:
            state.newMessageValue = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (value) => (
    {
        type: UPDATE_NEW_MESSAGE_VALUE,
        newMessage: value
    }
);

export default dialogsReducer;