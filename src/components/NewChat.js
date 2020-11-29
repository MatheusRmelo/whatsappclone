import React, { useState, useEffect } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import api from '../api';

export default ({user,chatlist, show, setShow}) => {
    const [list, setList] = useState([]);

    const handleClose = () => {
        setShow(false);
    }

    useEffect(()=>{
        const getList = async () => {
            if(user!==null){
                let results = await api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);

    return(
        <div className="newChat" style={{left:show?0:-415}}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <ArrowBackIcon style={{color:'white'}}/>
                </div>
                <div className="newChat-headtitle">
                    Nova conversa
                </div>
            </div>
            <div className="newChat-list">
                {list.map((item,key)=>(
                    <div className="newChat-item" key={key}>
                        <img className="newChat-itemavatar" src={item.avatar} alt="" />
                        <div className="newChat-itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}