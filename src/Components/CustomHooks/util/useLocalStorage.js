import { useEffect, useState } from "react";

export default function useLocalStorage(key,value){

    const [localStorageValue, setLocalStorageValue] = useState(null);

    useEffect(()=>{
        localStorage.setItem(key,localStorageValue);
    },[localStorageValue]) 

    return [localStorageValue, setLocalStorageValue];
}