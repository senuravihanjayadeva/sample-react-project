import React from 'react'
import useLocalStorage from './util/useLocalStorage'

function CustomHooks() {
  const [name, setName] = useLocalStorage("name","senura");

  return (
    <>
    <div>CustomHooks</div>
    <input type="text" onChange={(e)=>{
      setName(e.target.value)
    }}/>
    </>
  )
}

export default CustomHooks