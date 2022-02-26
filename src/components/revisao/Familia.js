export default props => {
    return (
        <>
            <h2>[Início] Membros da Família: </h2>
            {props.children}
            <h2>[Fim] Membros da Família </h2>
        </>
    )
}