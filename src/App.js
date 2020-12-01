import React, { useState, useEffect } from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import api from './api';

export default () => {

    const [chatList, setChatList] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);
    const [showNewChat, setShowNewChat] = useState(false);

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };
        await api.addUser(newUser);
        setUser(newUser);
    }

    if(user===null){
        return(<Login onReceive={handleLoginData} />);
    }

    useEffect(()=>{
        if(user!==null){
            let unsub = api.onChatList(user.id, setChatList);
            return unsub;
        }
    }, [user]);

    return(
        <div className="app-window">
            <div className="sidebar">
                <NewChat show={showNewChat} setShow={setShowNewChat} user={user} chatlist={chatList} />
                <header>
                    <img className="header-avatar" src={user.avatar} alt="Imagem do usuário" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div onClick={()=>setShowNewChat(true)} className="header-btn">
                            <ChatIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header-btn">
                            <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search-input">
                        <SearchIcon fontSize="small" style={{color: '#919191'}} /> 
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>
                <div className="chatList">
                    {
                        chatList.map((item,key)=>(
                            <ChatListItem key={key} data={item} onClick={()=>setActiveChat(chatList[key])} active={activeChat.chatId === chatList[key].chatId} />
                        ))
                    }
                </div>
            </div>
            <div className="content-area">
                {activeChat.chatId !== undefined
                ?<ChatWindow user={user} data={activeChat} />
                : <ChatIntro />
                }
               
            </div>
        </div>
    );
}