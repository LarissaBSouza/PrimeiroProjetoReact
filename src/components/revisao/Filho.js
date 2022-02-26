import React from 'react'

function Filho(props) {

    return(
        <>
            <button onClick={() => props.funcao("Larissa", 21)}>Passar Dados</button>
        </>
    )
}

export default Filho