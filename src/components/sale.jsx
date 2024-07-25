import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Sale = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const endTime = moment().add(1, 'hours');
        const interval = setInterval(() => {
            const now = moment();
            const duration = moment.duration(endTime.diff(now));

            setTimeLeft({
                hours: String(duration.hours()).padStart(2, '0'),
                minutes: String(duration.minutes()).padStart(2, '0'),
                seconds: String(duration.seconds()).padStart(2, '0')
            });

            if (duration.asSeconds() <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sale mt-5">
            <div className="d-flex align-items-center">
                <h3 className="fw-bold">Flash Sale</h3>
                <p className="m-2 ms-3 text-default fw-bold">Berakhir dalam</p>
                <div className="timer-card fw-bold d-flex align-items-center">
                    <span>{timeLeft.hours}</span> : <span>{timeLeft.minutes}</span> : <span>{timeLeft.seconds}</span>
                </div>
                <p className='ms-3 m-2 text-kita-green fw-bold'>Lihat semua</p>
            </div>
        </div>
    );
};

export default Sale;
