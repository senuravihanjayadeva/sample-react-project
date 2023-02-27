import React, { useState } from 'react'
import UpdatedComponent from './HOC-Component'

function Person2({money,incrementMoney}) {

    return (
      <div>
          <h1>Person 2 : {money}</h1>
          <button onClick={incrementMoney}>Increment Salary</button>
      </div>
    )
}

export default UpdatedComponent(Person2) 