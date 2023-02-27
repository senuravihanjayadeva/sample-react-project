import React, { useState } from 'react'

export default function UpdatedComponent(OriginalComponent){
    function NewComponent(){
        const [money, setMoney] = useState(200);

        const incrementMoney = () => {
          setMoney(money * 2);
        }
        
        return <OriginalComponent money={money} incrementMoney={incrementMoney} />
    }
    return NewComponent;
}