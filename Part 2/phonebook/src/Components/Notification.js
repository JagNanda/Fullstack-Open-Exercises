import React from "react";

const Notification = ({statusMessage, messageStatus}) => {

    if(statusMessage === null){
        return null;
    }

    return (
        <div>
            <p className={messageStatus === "success" ? "success" : "error"}>
                {statusMessage}
            </p>
                
        </div>
    )
}

export default Notification;