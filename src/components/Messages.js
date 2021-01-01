import React from "react";
import MessagesList from "./MessagesList";

const Messages = () => {
    return (
        <div className='block messages'>
            <div className='smallHeader'>
                <h3>Messages</h3>
                <div className='circles'>
                    <div className='blueCircle'>2</div>
                </div>
            </div>
            <MessagesList/>
        </div>
    );
}

export default Messages;