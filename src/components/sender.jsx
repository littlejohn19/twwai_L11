import React, {useState} from 'react'

const Sender = ({socket}) => {
    return (
        <div className='chat-footer'>
            <form className='form' onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Napisz...'
                    className='form-control'
                />
                <button className="btn btn-primary">Wyślij</button>
            </form>
        </div>
    )
}

export default Sender
