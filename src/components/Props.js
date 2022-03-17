import React from 'react'


const Props = props =>{
    return <div className='div'>
        <h1>Hello {props.name} A.K.A {props.heroName}</h1>
        {props.children}
        </div>
}

export default Props