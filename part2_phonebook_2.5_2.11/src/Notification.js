
import React from 'react';

const Notification = ({noti}) => {
    console.log(noti)
    if (noti.display === false) {
        return null
    }
    
    return (
        <div className='Notification-block' style={{
            borderRadius: '0.5em',
            border: `solid 2px ${noti.error ? 'red' : 'green'}`,
            backgroundColor: `${noti.error ? '#FD8181' : 'lightgreen'}`,
            display: `block`,
            width: '300px',
            alignItems: 'center'
        }}>
            <p className='Notification-text' style={{
                color: noti.error ? 'red' : 'green',
                fontWeight: 300,
                textAlign: 'center'
            }}>{noti.msj}</p>
        </div>
    )
}

export default Notification;