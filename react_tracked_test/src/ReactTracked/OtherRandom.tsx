import React from 'react'
// import { useDispatch } from './store';

export default function OtherRandom() {
    // const dispatch = useDispatch();
   
    // React.useEffect(()=>{
    //     let t = setTimeout(()=>{
    //         dispatch({ type: 'SET_RANDOM_NUMBER' });
    //     }, 100);
    //     return ()=> {
    //         clearInterval(t);
    //     }
    // }, []);

    return <span>{` |   ${Math.random()}    |   `}</span>;
}
