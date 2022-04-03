const FAVORITE_FRIEND = "FAVORITE_FRIEND";

let initialState = {
    person: [
        { id: 1, name: "David", avatar: "" },
        {
            id: 2,
            name: "Edvard",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            name: "Sam",
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
};
const favoriteFiendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITE_FRIEND:
            let stateCopy = {...state};
            stateCopy.dialogData = [...state.dialogData];
            return stateCopy;
        default:
            return state;
    }
}

export const updateFavoriteFriends = () => ({type: FAVORITE_FRIEND});

export default favoriteFiendsReducer;