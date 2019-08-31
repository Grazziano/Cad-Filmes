import React from 'react'

const ItemLista = props => {
    return (
        <tr>
            <td>{props.titulo}</td>
            <td>{props.genero}</td>
            <td>{props.data}</td>
            <td>{props.nota}</td>
            <td>
                <button className="btn btn-sm btn-danger mb-1">Excluir</button>&nbsp;
                <button className="btn btn-sm btn-warning mb-1">Alterar</button>
            </td>
        </tr>
    )
}

export default ItemLista