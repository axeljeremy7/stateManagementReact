import React, { useState, useEffect, useRef } from 'react'
// import { useDispatch } from './store';

export default function OtherRandom() {
    const [number, setNumber] = useState(0);
    const mounted = useRef(false);
    console.log(`OtherRandom ${number} ${new Date()}`);
    // console.log(`OtherRandom ${new Date()}`);

    useEffect(() => {
        if (mounted.current) return;
        if (number === 0) {
            setNumber(Math.random() * 100);
            mounted.current = true;
        }
    }, []);

    useEffect(() => {
        let t = setInterval(() => {
            setNumber(Math.random() * 100);
        }, 10000);
        return () => {
            clearInterval(t);
        }
    }, []);

    return <span>{`-- ${Math.random()}  -- ${new Date()}  --    |   `}</span>;
}
