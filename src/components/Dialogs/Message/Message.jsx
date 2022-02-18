import React from 'react';
import message from './Message.module.css';

const Message = (props) => {
    return (
        <div className={message.message}>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;