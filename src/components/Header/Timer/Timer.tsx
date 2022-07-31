import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = () => setSeconds((prevSecond) => prevSecond + 1);
        const interval = setInterval(timer, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    const formattedSeconds = new Date(seconds * 1000)
        .toISOString()
        .slice(11, 19);

    return (
        <p className="text-md text-white md:text-lg lg:text-xl">
            {formattedSeconds}
        </p>
    );
};

export default Timer;
