import React, {useState, useEffect} from 'react'

const Sidebar = ({socket}) => {

    return (
        <div className='chat-sidebar'>
            <h2>chat</h2>
            <div>
                <h4  className='chat-header'>Połączono</h4>
                <div className='chat-users'>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
