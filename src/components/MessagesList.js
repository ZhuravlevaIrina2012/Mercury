import React from 'react';
import {messages} from "../utils/Costants";
import Message from "./Message";

const MessagesList = () => {
    return (
        <div className='messagesList'>
            <section>
                {messages.map((item, index) => <Message message={item} key={index}/>)}
            </section>
        </div>
    );
}

export default MessagesList;