import React, { Children, createContext , useContext, useState, UseState} from 'react'
import { UserProfile } from '../components'
const StateContext = CreateContext()

const initialState={
    chat: false,
    cart:false,
    UserProfile:false,
    notification:false
}


export const ContextProvider=({Children})=>{


    const[activeMenu, setActiveMenu]=useState(true);

    return (
        <StateContext.Provider
            value={{activeMenu,}}
        >
            {Children}
        </StateContext.Provider>
    )
}

export const useContext=()=>useContext(StateContext);