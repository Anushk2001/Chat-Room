import { Avatar } from '@material-ui/core';
import React from 'react';
import "./sidebarChats.css"

function SidebarChats() {
    return (
        <div className="sidebarChats">
            <Avatar/>
            <div className="sidebarChats__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>       
        </div>
    )
}

export default SidebarChats;
