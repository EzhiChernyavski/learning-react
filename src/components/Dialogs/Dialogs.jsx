import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsPage = props.dialogsPage;
    //Dialog render
    let dialogsElement = dialogsPage.dialogData.map(d => <DialogItem name={d.name} key={d.id} avatar={d.avatar} />);

    //Message render
    let messagesElements = dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id} />);

    const addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let value = e.target.value;
        props.updateNewMessageBody(value);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={dialogs.messages}>
                {messagesElements}
                <div className={dialogs.message_area}>
                    <textarea
                        onChange={onMessageChange}
                        value={props.dialogsPage.newMessageValue}
                    />
                    <button onClick={ addMessage }>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;