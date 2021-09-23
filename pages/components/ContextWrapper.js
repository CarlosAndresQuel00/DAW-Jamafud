import HeadContext from "../../contexts/HeadContext";
import {useState} from 'react';
import React from 'react'

export default function ContextWrapper({children}) {
    const [token, setToken] = useState("HolaATodos!")
    return (
        <HeadContext.Provider value={{token,setToken}} >
            {children}
        </HeadContext.Provider>
    )
}
