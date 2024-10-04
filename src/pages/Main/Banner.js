import React, { useEffect, useState } from 'react';
import banner from '../../assets/img/banner.png';
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Banner = () => {
    const [countdownEnd, setCountdownEnd] = useState(null);

    useEffect(() => {
        // Get the current date
        const now = new Date();

        // Set the countdown end to the next midnight
        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);

        setCountdownEnd(end.getTime());
    }, []);

    if (!countdownEnd) return null; // Don't render anything until we have calculated the end time

    return (
        <div className='relative px-10 md:px-[100px] font-rubick'>
            <img src={banner} alt="banner" className='w-full'/>
            <FlipClockCountdown
                style={{position:"absolute", left:"28%", top:"75%", bottom:"50%"}}
                labelStyle={{ color:"#D18A00", fontSize: 15, fontWeight: 500, textTransform: 'uppercase' }}
                className='bg-red-800'
                digitBlockStyle={{ backgroundColor:"#FFA500",opacity:"70%", width: 60, height: 70, fontSize: 60 }}
                dividerStyle={{ color: 'white', height: 1 }}
                separatorStyle={{ color: '#D18A00', size: '8px' }}
                to={countdownEnd}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                duration={0.5}
            />
        </div>
    );
};

export default Banner;