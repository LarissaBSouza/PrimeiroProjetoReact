import If from './If'

export default props => {

    const usuario = props.usuario || {}
    return (
        <>
            <If test = {usuario && usuario.nome && usuario.email}>
                <h2>Usuário Logado: </h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </If>
        </>
    )
}