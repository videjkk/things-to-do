import React, {useState, useEffect} from 'react';

const useDebounce = (func, ms) => {
    let timeout;
    return function () {
        const fnCall = () => {func.apply(this, arguments)}
        
        clearTimeout(timeout);
        
        timeout = setTimeout(fnCall, ms)
    };



    
}
export default useDebounce







// return (...args) => {
    //     clearTimeout(timer);

    //     timer = setTimeout(() => {
    //         func(...args);
    //     }, 1000)
    // };
    // // const [debouncedValue, setDebouncedValue] = useState(value)

    // // useEffect(() => {
    // //     let timeoutId = setTimeout(()=>{
    // //         setDebouncedValue(value)
    // //     }, 500)
    // //     return () => {
    // //         clearTimeout(timeoutId)
    // //     }
    // // },[value])

    // // console.log(1)

    // // return debouncedValue