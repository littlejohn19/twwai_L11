import React from 'react'

const Content = ({messages, typingStatus, lastMessageRef}) => {

    return (
        <>
            <header className='chat-mainHeader'>
                <p>Technologie webowe w aplikacjach internetu</p>
                <button className='btn btn-danger'>Wyjdź</button>
            </header>

            <div className='message-container'>
                {messages.map(message => (
                    message.name === localStorage.getItem("userName") ? (
                        <div className="message-chats" key={message.id}>
                            <p className='sender-name'>Ty</p>
                            <div className='message-sender'>
                                <p className=''>{message.text}</p>
                            </div>
                        </div>
                    ): (
                        <div className="message-chats" key={message.id}>
                            <p>{message.name}</p>
                            <div className='message-recipient'>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )
                ))}

                <div ref={lastMessageRef} />
            </div>
        </>
    )
}

export default Content
