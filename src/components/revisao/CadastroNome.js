import React, { Component } from 'react'

class CadastroNome extends Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}

class CadastroNome extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: ''
        }
    }

    render(){
        return (
            <div>
                <h2>{this.state.nome}</h2>
                <input type="text" placeholder="Digite seu nome" value={this.state.nome} onChange={(event) => this.setState({nome:event.target.value})}/>
            </div>
        )
    }
}