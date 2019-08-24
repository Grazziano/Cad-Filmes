import React from 'react'

const ItemLista = props => {
    return (
        <tr>
            <td>{props.titulo}</td>
            <td>{props.genero}</td>
            <td>{props.data}</td>
            <td>{props.nota}</td>
            <td>
                <button className="btn btn-sm btn-danger">Excluir</button>
                <button className="btn btn-sm btn-warning">Alterar</button>
            </td>
        </tr>
    )
}

export default ItemLista