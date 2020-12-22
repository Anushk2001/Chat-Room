import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChats from './SidebarChats';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                  {/* Here we can upload Image */}
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9D5oo7Ay9Wq-qNH0IzBTeuWvjDg-2EoyjXw&usqp=CAU"/> 
         
            <div className="sidebar__headerRight">
                {/* Why material Icon --> So smoother */}
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                   <SearchOutlinedIcon/>
                   <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
            </div>

        </div>
    )
}

export default Sidebar;
