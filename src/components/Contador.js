import React, {useState} from 'react'

function Contador(props) {
    
    const [numero, setNumero] = useState(props.inicial)

    const incremento = () => {

        if (numero == 100){
            alert("Não é possível passar do 100")
            return
        }
        setNumero(numero + 1)
    }

    const decremento = () => {

        if (numero == 0){
            alert("Não é possível passar do 0!")
            return
        }
        setNumero(numero - 1)
    }

    return (
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
    )
}

export default Contador