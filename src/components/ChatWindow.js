import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleEmojiClick = ()=>{

    }

    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                    <div className="chatWindow-name">Matheus Melo</div>
                </div>

                <div className="chatWindow-headerButtons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color:'#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color:'#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color:'#919191'}} />
                    </div>
                </div>


            </div>
            <div className="chatWindow-body">
                
            </div>

            <div className="chatWindow-emojiarea" style={{height: emojiOpen ? 200 : 0}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar={true}
                    disableSkinTonePicker={true}
                />
            </div>

            <div className="chatWindow-footer">
                <div className="chatWindow-pre">
                    <div className="chatWindow-btn" style={{width: emojiOpen ? 40 : 0}} onClick={()=>setEmojiOpen(false)}>
                        <CloseIcon style={{color:'#919191'}} />
                    </div>

                    <div className="chatWindow-btn" onClick={()=>setEmojiOpen(true)}>
                        <InsertEmoticonIcon style={{color:emojiOpen? '#009688':'#919191'}} />
                    </div>
                </div>
                <div className="chatWindow-inputarea">
                    <input 
                        className="chatWindow-input" 
                        type="text"
                        placeholder="Digite uma mensagem" />
                </div>
                <div className="chatWindow-pos">
                    <div className="chatWindow-btn">
                        <SendIcon style={{color:'#919191'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}