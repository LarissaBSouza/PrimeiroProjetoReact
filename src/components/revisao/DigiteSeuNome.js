import React, {useState} from 'react'

export default props => {

    const [nome, setNome] = useState('')

    return (
        <div>
            <h2>{nome}</h2>
            <input type="text" placeholer="D}igite seu nome" value={nome} onChange={event => setNome(event.target.value)}/>
        </div>
    )
}