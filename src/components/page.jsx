import React, { useEffect, useState, useRef} from 'react'
import Sidebar from './sidebar'
import Content from './content'
import Sender from './sender'

const Page = ({socket}) => {

    return (
        <div className="chat">
            <Sidebar socket={socket}/>
            <div className='chat-main'>
                <Content/>
                <Sender socket={socket}/>
            </div>
        </div>
    )
}

export default Page
