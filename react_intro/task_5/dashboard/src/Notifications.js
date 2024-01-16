import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './closeIcon.jpg';

const Notifications = () => {
  const ButtonStyle = {
    display: 'inline-block',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    float: 'right',
    top: '15px',
    right: '15px',

    borderStyle: 'none',

  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li className="latest-notification" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button type="button" style={ButtonStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close icon"/>
      </button>
    </div>
  )
};
export default Notifications;
