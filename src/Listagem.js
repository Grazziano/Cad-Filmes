import React from 'react'
import ItemLista from './ItemLista'

class Listagem extends React.Component {

    state = {
        filmes: [
            {
                titulo: 'A Era do Gelo',
                genero: 'Infantil',
                data: '20/02/2017',
                nota: 8
            },
            {
                titulo: 'Esqueceram de Mim',
                genero: 'Comédia',
                data: '20/02/2012',
                nota: 7
            }
        ]
    }

    render() {
        return (
            <div className="mx-2">
                <table className="table table-sm table-stripped table-bordered table-action">
                    <thead>
                        <tr className="table-primary">
                            <th>Título</th>
                            <th>Gênero</th>
                            <th>Data</th>
                            <th>Nota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.filmes.map((filme) => (
                            <ItemLista key={filme.titulo}
                                titulo={filme.titulo}
                                genero={filme.genero}
                                data={filme.data}
                                nota={filme.nota} />
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Listagem