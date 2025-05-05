import React from 'react'
import PropTypes, { func } from 'prop-types';
import { useState } from 'react';

//raftc enter
export const CounterApp = ({value,}) => {

    const [ contador,setContador  ] = useState( value );


    const handleAdd = () => {
        //setContador( (c)=>c+1)
        setContador( contador+1);
    }
    const handleSubstract = () => {
        setContador( contador-1);
    } 
    
    const handleReset = () => {
        setContador( value);
    }

    return (
        //Todo tiene que estar en un fragmento
        <>
        <h1>CounterApp</h1>  
        <h1> { contador } </h1>
        
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        </>
    );//h1> { value } </h1>
    }

CounterApp.propTypes = {
  value : PropTypes.number.isRequired,
}