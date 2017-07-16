import React, { Component }  from 'react';

function Message(props){
    return(
        <div className="message">
            <input type="text-area" defaultValue="Tell Us something!"></input>
           <button type="submit" id="sendIt">Sendit!!</button>


        </div>

    )
}

export default Message;