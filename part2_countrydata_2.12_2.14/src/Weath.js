import React from 'react';

const Weath = ({Weather}) => {
    return(
        <div className='Weather_block'>
            Temperature: {Weather.current.temperature}
            <br/>
            <img alt='weatherImg' src={Weather.current.weather_icons[0]}/>
            <br/>
            Wind: {`${Weather.current.wind_speed}MPH direction: ${Weather.current.wind_dir}`}
        </div>
    )
}

export default Weath;