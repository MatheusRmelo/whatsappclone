import React from 'react';
import './Login.css';

import api from '../api';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert('Erro!');
        }
    }

    return(
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}