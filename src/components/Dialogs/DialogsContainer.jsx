import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*
const DialogsContainer = () => {

    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (value) => {
        let action = updateNewMessageActionCreator(value);
        props.store.dispatch(action);
    }

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (value) => {
                    let action = updateNewMessageActionCreator(value);
                    store.dispatch(action);
                }


                return <Dialogs
                    updateNewMessageBody={onMessageChange}
                    sendMessage={addMessage}
                    state={state}
                />
            }
        }
    </StoreContext.Consumer>
}
*/

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (value) => {
            let action = updateNewMessageActionCreator(value);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;