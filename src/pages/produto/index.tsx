import { Link, useParams } from 'react-router-dom'

export function Produto() {
    const { id } = useParams()

    return(
        <div>
            <h1 className='title'>Página de Produtos</h1>
            <hr />
            <h1>Descrição do produto {id}</h1>
            {/* <Link to='/'>Voltar para o início</Link> */}
        </div>
    )
}