import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            heigth="100vh"
            projectID="7bb99c92-3fb3-47f0-9662-705db018e2de"
            userName="JoseJS"
            userSecret="12345"
        />
    )
}

export default App;
    