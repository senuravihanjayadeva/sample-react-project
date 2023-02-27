import React, { useState } from 'react'
import UpdatedComponent from './HOC-Component'

function Person1({money,incrementMoney}) {
  return (
    <div>
        <h1>Person 1 : {money}</h1>
        <button onClick={incrementMoney}>Increment Salary</button>
    </div>
  )
}

export default UpdatedComponent(Person1)