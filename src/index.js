import React from "react";
import ReactDOM from "react-dom";
import {GlobalStyles} from "./globalStyles";
import App from "./app";
import {FirebaseContext} from "./context/firebase";

const config = {
    apiKey: "AIzaSyB5WGWEm9w1a5FPrZSeggnN-pYJuCn9a68",
    authDomain: "reactjs-netflix-clone-76cd5.firebaseapp.com",
    databaseURL: "https://reactjs-netflix-clone-76cd5-default-rtdb.firebaseio.com",
    projectId: "reactjs-netflix-clone-76cd5",
    storageBucket: "reactjs-netflix-clone-76cd5.appspot.com",
    messagingSenderId: "921047649653",
    appId: "1:921047649653:web:ae54a2fc5fbe223899573c"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{firebase: window.firebase}}>
            <GlobalStyles/>
            <App/>
        </FirebaseContext.Provider>
    </>,
    document.getElementById("root")
);